"use client";   

import LoginForm from "@/components/modules/auth/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

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
                    <div className="text-center mb-8 text-center">
                        <div className="inline-flex p-3 bg-gradient-primary rounded-2xl mb-4">
                            <Calendar className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2 text-foreground">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to continue your journey</p>
                    </div>

                    <Card className="bg-card border-border shadow-card">
                        <CardHeader className="text-center">
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Enter your credentials to access your account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <LoginForm/>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;