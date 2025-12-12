"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchemaType } from "@/lib/services/auth/auth.type";
import { LoginSchema } from "@/lib/services/auth/auth.validation";
import Link from "next/link";



export default function LoginForm() {
    const form = useForm<LoginSchemaType>( {
        resolver: zodResolver( LoginSchema ),
        defaultValues: {
            email: "",
            password: "",
        },
    } );

    const onSubmit = ( data: LoginSchemaType ) =>
    {
        console.log( "Form Data:", data );
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit( onSubmit )} className="space-y-5">

                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={( { field } ) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="bg-background border-border"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password */}
                <FormField
                    control={form.control}
                    name="password"
                    render={( { field } ) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-background border-border"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full bg-orange-700 text-white hover:shadow-glow hover:bg-black"
                >
                    Sign In
                </Button>

                {/* Register Link */}
                <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="text-primary hover:underline font-semibold"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </Form>
    );
}