import type { StorybookConfig } from '@storybook/nextjs-vite';
import type { Plugin } from 'vite';

// Vite 8 / Rolldown drops the `reselect` import from
// `@base-ui/utils/store/createSelectorMemoized.mjs` during tree-shaking,
// leaving a runtime ReferenceError in the production build. This plugin
// replaces the module source with an equivalent that imports reselect as
// a namespace, which Rolldown preserves correctly.
const patchBaseUiSelector = (): Plugin => ({
  name: 'patch-base-ui-create-selector-memoized',
  enforce: 'pre',
  transform(_code, id) {
    if (!id.includes('@base-ui/utils/store/createSelectorMemoized')) {
      return null;
    }
    return {
      code: `
import _formatErrorMessage from "../formatErrorMessage.mjs";
import { createSelectorCreator, lruMemoize } from "reselect";

let _reselectCreateSelector;
const getReselectCreateSelector = () => {
  if (!_reselectCreateSelector) {
    _reselectCreateSelector = createSelectorCreator({
      memoize: lruMemoize,
      memoizeOptions: { maxSize: 1, equalityCheck: Object.is },
    });
  }
  return _reselectCreateSelector;
};

export const createSelectorMemoized = (...selectors) => {
  const cache = new WeakMap();
  let nextCacheId = 1;
  const combiner = selectors[selectors.length - 1];
  const nSelectors = selectors.length - 1 || 1;
  const argsLength = combiner.length - nSelectors;
  if (argsLength > 3) {
    throw new Error(process.env.NODE_ENV !== "production" ? 'Unsupported number of arguments' : _formatErrorMessage(2));
  }
  const selector = (state, a1, a2, a3) => {
    let cacheKey = state.__cacheKey__;
    if (!cacheKey) {
      cacheKey = { id: nextCacheId };
      state.__cacheKey__ = cacheKey;
      nextCacheId += 1;
    }
    let fn = cache.get(cacheKey);
    if (!fn) {
      let reselectArgs = selectors;
      const selectorArgs = [undefined, undefined, undefined];
      switch (argsLength) {
        case 0: break;
        case 1: reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], combiner]; break;
        case 2: reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], combiner]; break;
        case 3: reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], () => selectorArgs[2], combiner]; break;
        default: throw new Error(process.env.NODE_ENV !== "production" ? 'Unsupported number of arguments' : _formatErrorMessage(2));
      }
      fn = getReselectCreateSelector()(...reselectArgs);
      fn.selectorArgs = selectorArgs;
      cache.set(cacheKey, fn);
    }
    fn.selectorArgs[0] = a1;
    fn.selectorArgs[1] = a2;
    fn.selectorArgs[2] = a3;
    switch (argsLength) {
      case 0: return fn(state);
      case 1: return fn(state, a1);
      case 2: return fn(state, a1, a2);
      case 3: return fn(state, a1, a2, a3);
      default: throw new Error('unreachable');
    }
  };
  return selector;
};
`,
      map: null,
    };
  },
});

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/nextjs-vite',
  viteFinal: async (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    config.plugins = [...(config.plugins ?? []), patchBaseUiSelector()];
    return config;
  },
};
export default config;
