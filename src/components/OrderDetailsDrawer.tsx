import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrderDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultType?: "pickup" | "delivery";
}

export const OrderDetailsDrawer = ({
  open,
  onOpenChange,
  defaultType = "pickup",
}: OrderDetailsDrawerProps) => {
  const [orderType, setOrderType] = useState<"pickup" | "delivery">(defaultType);
  const [dateOption, setDateOption] = useState<"today" | "choose">("today");
  const [timeSlot, setTimeSlot] = useState("06:30-23:00");

  // Delivery form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSave = () => {
    console.log({
      orderType,
      dateOption,
      timeSlot,
      ...(orderType === "delivery" && {
        firstName,
        lastName,
        company,
        street,
        postalCode,
        city,
        country,
      }),
    });
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <div className="overflow-y-auto">
          <DrawerHeader className="px-6 pt-6 pb-4">
            {/* Pickup/Delivery Toggle */}
            <div className="flex gap-3 mb-6">
              <Button
                variant={orderType === "pickup" ? "default" : "secondary"}
                onClick={() => setOrderType("pickup")}
                className="rounded-full px-8 font-semibold"
              >
                Pickup
              </Button>
              <Button
                variant={orderType === "delivery" ? "default" : "secondary"}
                onClick={() => setOrderType("delivery")}
                className="rounded-full px-8 font-semibold"
              >
                Delivery
              </Button>
            </div>

            {/* Date Selection */}
            <div className="flex gap-3 mb-6">
              <Button
                variant={dateOption === "today" ? "default" : "secondary"}
                onClick={() => setDateOption("today")}
                className="rounded-full px-8 font-semibold"
              >
                Today
              </Button>
              <Button
                variant={dateOption === "choose" ? "default" : "secondary"}
                onClick={() => setDateOption("choose")}
                className="rounded-full px-8 font-semibold text-muted-foreground"
              >
                Choose a day
              </Button>
            </div>

            {/* Time Slot Selection */}
            <div className="mb-6">
              <Label className="text-foreground font-bold mb-2 block">
                {orderType === "pickup" ? "When" : ""}
              </Label>
              <Select value={timeSlot} onValueChange={setTimeSlot}>
                <SelectTrigger className="w-full bg-card border-border rounded-xl h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="06:30-23:00">06:30-23:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                  <SelectItem value="18:00">18:00</SelectItem>
                  <SelectItem value="20:00">20:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </DrawerHeader>

          {/* Delivery Address Form */}
          {orderType === "delivery" && (
            <div className="px-6 pb-6 space-y-6">
              <h3 className="text-foreground font-bold text-lg">Your address</h3>

              {/* First name & Last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-foreground font-bold mb-2 block">
                    First name
                  </Label>
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="bg-card border-border rounded-xl h-12"
                  />
                  <span className="text-xs text-muted-foreground mt-1 block">
                    (Required)
                  </span>
                </div>
                <div>
                  <Label className="text-foreground font-bold mb-2 block">
                    Last name
                  </Label>
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="bg-card border-border rounded-xl h-12"
                  />
                  <span className="text-xs text-muted-foreground mt-1 block">
                    (Required)
                  </span>
                </div>
              </div>

              {/* Company */}
              <div>
                <Label className="text-foreground font-bold mb-2 block">
                  Company
                </Label>
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company"
                  className="bg-card border-border rounded-xl h-12"
                />
                <span className="text-xs text-muted-foreground mt-1 block">
                  (Optional)
                </span>
              </div>

              {/* Street & number */}
              <div>
                <Label className="text-foreground font-bold mb-2 block">
                  Street & number
                </Label>
                <Input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="Street & number"
                  className="bg-card border-border rounded-xl h-12"
                />
                <span className="text-xs text-muted-foreground mt-1 block">
                  (Required)
                </span>
              </div>

              {/* Postal code & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-foreground font-bold mb-2 block">
                    Postal code
                  </Label>
                  <Input
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal code"
                    className="bg-card border-border rounded-xl h-12"
                  />
                  <span className="text-xs text-muted-foreground mt-1 block">
                    (Required)
                  </span>
                </div>
                <div>
                  <Label className="text-foreground font-bold mb-2 block">
                    City
                  </Label>
                  <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="bg-card border-border rounded-xl h-12"
                  />
                  <span className="text-xs text-muted-foreground mt-1 block">
                    (Required)
                  </span>
                </div>
              </div>

              {/* Country */}
              <div>
                <Label className="text-foreground font-bold mb-2 block">
                  Country
                </Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="w-full bg-card border-border rounded-xl h-12">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="netherlands">Netherlands</SelectItem>
                    <SelectItem value="belgium">Belgium</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <DrawerFooter className="border-t border-border pt-4 px-6 pb-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button
              onClick={handleCancel}
              variant="secondary"
              className="rounded-full py-6 text-base font-bold uppercase"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              variant="default"
              className="rounded-full py-6 text-base font-bold uppercase"
            >
              Save
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
