
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  LineChart, 
  CalendarDays, 
  MessageSquare, 
  Settings, 
  Home, 
  Menu, 
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground flex flex-col h-screen transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <h1 className="text-xl font-bold text-white">CRM Pro</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={toggleSidebar}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {[
            { icon: Home, label: "Dashboard", path: "/" },
            { icon: Users, label: "Customers", path: "/customers" },
            { icon: LineChart, label: "Analytics", path: "/analytics" },
            { icon: CalendarDays, label: "Calendar", path: "/calendar" },
            { icon: MessageSquare, label: "Messages", path: "/messages" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                  window.location.pathname === item.path && "bg-sidebar-accent"
                )}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Link
          to="/settings"
          className="flex items-center px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <Settings size={20} className="flex-shrink-0" />
          {!collapsed && <span className="ml-3">Settings</span>}
        </Link>
      </div>
    </div>
  );
}
