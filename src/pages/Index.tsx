
import { 
  Users, 
  DollarSign, 
  BarChart4, 
  Calendar 
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { CustomerList } from "@/components/dashboard/CustomerList";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your CRM data.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          title="Total Customers"
          value="1,248"
          description="from last month"
          trendValue="+12.5%"
          trend="up"
          icon={<Users size={18} />}
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          description="from last month"
          trendValue="+8.2%"
          trend="up"
          icon={<DollarSign size={18} />}
        />
        <StatCard
          title="Active Deals"
          value="36"
          description="from last month"
          trendValue="-4.3%"
          trend="down"
          icon={<BarChart4 size={18} />}
        />
        <StatCard
          title="Scheduled Meetings"
          value="12"
          description="for this week"
          trendValue="+2"
          trend="up"
          icon={<Calendar size={18} />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <RevenueChart />
        <CustomerList />
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
