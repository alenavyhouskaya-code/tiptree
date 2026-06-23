"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  signInSchema,
  signUpSchema,
  type AuthMode,
  type SignInValues,
  type SignUpValues,
} from "@/lib/auth-schema"

type AuthFormProps = {
  mode: AuthMode
  className?: string
  ctaLabel?: string
}

export function AuthForm({ mode, className, ctaLabel }: AuthFormProps) {
  const isSignIn = mode === "sign-in"

  const form = useForm<SignInValues | SignUpValues>({
    resolver: zodResolver(isSignIn ? signInSchema : signUpSchema),
    defaultValues: isSignIn
      ? { email: "", password: "", remember: false }
      : { email: "", password: "", terms: false },
  })

  function onSubmit(values: SignInValues | SignUpValues) {
    toast.success(isSignIn ? "Signed in (demo)" : "Account created (demo)", {
      description: values.email,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  {isSignIn && (
                    <Link
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    autoComplete={isSignIn ? "current-password" : "new-password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isSignIn ? (
            <FormField
              control={form.control}
              name={"remember" as const}
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Keep me signed in
                  </FormLabel>
                </FormItem>
              )}
            />
          ) : (
            <FormField
              control={form.control}
              name={"terms" as const}
              render={({ field }) => (
                <FormItem className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={!!field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      I agree to the Terms of Service
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-[var(--cta)] px-4 py-3 text-sm font-medium text-[var(--cta-foreground)] transition-opacity hover:opacity-90"
        >
          {ctaLabel ?? (isSignIn ? "Sign in" : "Create account")}
        </button>
      </form>
    </Form>
  )
}
