"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import
    {
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
    } from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { use } from "react";

interface RevenueProps {
    getRevenueForHostPromise: Promise<any>;
}

export default function Revenue({ getRevenueForHostPromise }: RevenueProps) {
    // Use React Server Components suspense `use()` to unwrap the promise
    const revenueData = use( getRevenueForHostPromise )?.data;
    
    console.log(revenueData)

    if (!revenueData) {
        return (
            <TabsContent value="revenue" className="space-y-6">
                <p className="text-red-500 py-10 text-center">No revenue data available.</p>
            </TabsContent>
        );
    }

    const { thisMonth, lastMonth, totalRevenue, events } = revenueData;

    return (
        <TabsContent value="revenue" className="space-y-6">
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Revenue Summary */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                                <p className="text-sm text-muted-foreground">This Month</p>
                                <p className="text-2xl font-bold text-primary">${thisMonth}</p>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-lg">
                                <p className="text-sm text-muted-foreground">Last Month</p>
                                <p className="text-2xl font-bold">${lastMonth}</p>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-lg">
                                <p className="text-sm text-muted-foreground">Total Earnings</p>
                                <p className="text-2xl font-bold text-secondary">${totalRevenue}</p>
                            </div>
                        </div>

                        {/* Revenue by Event */}
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Event</TableHead>
                                    <TableHead>Total participants</TableHead>
                                    <TableHead>Event joining fee</TableHead>
                                    <TableHead className="text-right">Revenue</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {events.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-muted-foreground">
                                            No events with revenue
                                        </TableCell>
                                    </TableRow>
                                )}

                                {events.map((event: any) => (
                                    <TableRow key={event.id}>
                                        <TableCell className="font-medium">{event.title}</TableCell>
                                        <TableCell>{event.attendees}</TableCell>
                                        <TableCell>${event.joiningFee}</TableCell>
                                        <TableCell className="text-right font-bold text-primary">
                                            ${event.joiningFee * event.attendees}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    );
}