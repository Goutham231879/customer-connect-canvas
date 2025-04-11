
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, ChevronRight } from "lucide-react";

// Mocked customer data
const customers = [
  {
    id: "1",
    name: "Alex Johnson",
    company: "Acme Inc.",
    email: "alex@acme.com",
    status: "active",
    image: "",
    initials: "AJ",
    lastContact: "2 days ago",
    value: "$12,000",
  },
  {
    id: "2",
    name: "Sarah Williams",
    company: "Globex Corp",
    email: "sarah@globex.com",
    status: "new",
    image: "",
    initials: "SW",
    lastContact: "Today",
    value: "$8,500",
  },
  {
    id: "3",
    name: "Michael Brown",
    company: "Umbrella LLC",
    email: "michael@umbrella.com",
    status: "inactive",
    image: "",
    initials: "MB",
    lastContact: "1 week ago",
    value: "$5,200",
  },
  {
    id: "4",
    name: "Emma Davis",
    company: "Stark Industries",
    email: "emma@stark.com",
    status: "active",
    image: "",
    initials: "ED",
    lastContact: "Yesterday",
    value: "$15,300",
  },
  {
    id: "5",
    name: "Robert Smith",
    company: "Wayne Enterprises",
    email: "robert@wayne.com",
    status: "new",
    image: "",
    initials: "RS",
    lastContact: "4 hours ago",
    value: "$7,800",
  },
];

export function CustomerList() {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredCustomers = activeTab === "all" 
    ? customers 
    : customers.filter(customer => customer.status === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-700";
      case "new":
        return "bg-blue-100 text-blue-700";
      case "inactive":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Recent Customers</CardTitle>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
          </Button>
        </div>
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full max-w-xs">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {filteredCustomers.map((customer) => (
            <div 
              key={customer.id}
              className="flex items-center justify-between py-3 first:pt-0 last:pb-0 group cursor-pointer hover:bg-muted/50 -mx-6 px-6 rounded-md transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={customer.image} alt={customer.name} />
                  <AvatarFallback>{customer.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-muted-foreground">{customer.company}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className={`mr-4 ${getStatusColor(customer.status)}`}>
                  {customer.status}
                </Badge>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
