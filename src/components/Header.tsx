import { Calendar, Clock, Headphones, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { OrderDetailsDrawer } from "./OrderDetailsDrawer";

export const Header = () => {
  const [activeTab, setActiveTab] = useState<"pickup" | "delivery">("pickup");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState<"pickup" | "delivery">("pickup");

  const handleTabClick = (type: "pickup" | "delivery") => {
    setActiveTab(type);
    setDrawerType(type);
    setDrawerOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left Section: Tabs and Date/Time */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex gap-2">
              <Button
                variant={activeTab === "pickup" ? "default" : "secondary"}
                onClick={() => handleTabClick("pickup")}
                className="rounded-full"
              >
                Pickup
              </Button>
              <Button
                variant={activeTab === "delivery" ? "default" : "secondary"}
                onClick={() => handleTabClick("delivery")}
                className="rounded-full"
              >
                Delivery
              </Button>
            </div>
            
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setDrawerOpen(true)}
            >
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Saturday, Nov 29</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5" />
                <span className="font-medium">10:00</span>
              </div>
            </div>
          </div>

          {/* Right Section: Icons */}
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
              <Headphones className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <OrderDetailsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        defaultType={drawerType}
      />
    </header>
  );
};
