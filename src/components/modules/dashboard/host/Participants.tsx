"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";

interface ParticipantsProps {
  getParticipantPromise: Promise<any>;
}

export default function Participants({ getParticipantPromise }: ParticipantsProps) {
    const participantData = use( getParticipantPromise )?.data || [];
    const router = useRouter();

  return (
    <TabsContent value="participants" className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Event Participants</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Participant</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {participantData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-6">
                    No participants found!
                  </TableCell>
                </TableRow>
              )}

              {participantData.map((p: any) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={p.user.image ?? ""} />
                        <AvatarFallback>{p.user.fullname.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{p.user.fullname}</p>
                        <p className="text-sm text-muted-foreground">{p.user.email}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>{p.event.title}</TableCell>

                  <TableCell>
                    <Badge className="bg-green-500/20 text-green-500">Confirmed</Badge>
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {new Date(p.joinedAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/profile?userId=${p?.user?.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
}