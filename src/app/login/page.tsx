"use client";   

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";

const LoginPage = () =>
{
    return (
        <div className="min-h-screen bg-background">

            <div className="pt-24 pb-12 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex p-3 bg-gradient-primary rounded-2xl mb-4">
                            <Calendar className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2 text-foreground">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to continue your journey</p>
                    </div>

                    <Card className="bg-card border-border shadow-card">
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Enter your credentials to access your account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="bg-background border-border"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-background border-border"
                                />
                            </div>
                            
                            <Button className="w-full bg-orange-700 text-white hover:shadow-glow">
                                Sign In
                            </Button>
                            
                            <p className="text-center text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <Link href="/register" className="text-primary hover:underline font-semibold">
                                    Sign up
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;