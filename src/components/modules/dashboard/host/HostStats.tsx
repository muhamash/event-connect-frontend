"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";
import { use } from "react";

interface HostsStatsProps
{
    getHostStatsPromise: Promise<any>;
}

export default function HostStats ( {  getHostStatsPromise }:HostsStatsProps) {
    const stats = use( getHostStatsPromise )?.data;
    // console.log(stats)

    const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
    
    if ( !stats )
    {
        return 
        <div className="py-20">
            <p className="text-center text-rose-600">Empty host stats!!!</p>
        </div>
    }

    return (
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card border-border">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <Badge variant="outline" className="border-green-500/50 text-green-500">
                            <TrendingUp className="h-5 w-4 mr-1" />
                        </Badge>
                    </div>
                    <p className="text-2xl font-bold">${stats.totalRevenue}</p>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                </CardContent>
            </Card>

            <Card className="bg-card border-border">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="text-2xl font-bold">{stats.totalAttendees}</p>
                    <p className="text-sm text-muted-foreground">Total Attendees</p>
                </CardContent>
            </Card>

            <Card className="bg-card border-border">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-2xl font-bold">{stats.activeEvents}</p>
                    <p className="text-sm text-muted-foreground">Active Events</p>
                </CardContent>
            </Card>

            {/* <Card className="bg-card border-border">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <Star className="h-5 w-5 text-primary fill-primary" />
                    </div>
                    <p className="text-2xl font-bold">{stats.avgRating}</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                </CardContent>
            </Card> */}
        </motion.div>
    );
}
