
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MessageSquare, PhoneCall, Mail, Star } from "lucide-react";

interface Activity {
  id: string;
  type: "call" | "email" | "meeting" | "message" | "follow-up";
  user: {
    name: string;
    image?: string;
    initials: string;
  };
  time: string;
  description: string;
}

// Mocked activity data
const activities: Activity[] = [
  {
    id: "1",
    type: "call",
    user: {
      name: "Alex Johnson",
      initials: "AJ",
    },
    time: "10:30 AM",
    description: "Call with Acme Inc. regarding new contract",
  },
  {
    id: "2",
    type: "email",
    user: {
      name: "Sarah Williams",
      initials: "SW",
    },
    time: "Yesterday",
    description: "Sent proposal to Globex Corp",
  },
  {
    id: "3",
    type: "meeting",
    user: {
      name: "Michael Brown",
      initials: "MB",
    },
    time: "Oct 5",
    description: "Product demo meeting with Umbrella LLC",
  },
  {
    id: "4",
    type: "message",
    user: {
      name: "Emma Davis",
      initials: "ED",
    },
    time: "Oct 3",
    description: "Chat regarding project timeline and milestones",
  },
  {
    id: "5",
    type: "follow-up",
    user: {
      name: "Robert Smith",
      initials: "RS",
    },
    time: "Oct 1",
    description: "Follow-up on previous proposal to Wayne Enterprises",
  },
];

export function ActivityFeed() {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "call":
        return <PhoneCall size={15} className="text-blue-500" />;
      case "email":
        return <Mail size={15} className="text-purple-500" />;
      case "meeting":
        return <Calendar size={15} className="text-green-500" />;
      case "message":
        return <MessageSquare size={15} className="text-amber-500" />;
      case "follow-up":
        return <Star size={15} className="text-rose-500" />;
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="relative">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={activity.user.image} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-background bg-white p-0.5">
                  {getActivityIcon(activity.type)}
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">
                    {activity.user.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
