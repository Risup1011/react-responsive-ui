import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { X, Plus, Minus } from "lucide-react";

interface ProductOption {
  id: string;
  label: string;
  image: string;
}

interface ProductConfigDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string;
  title: string;
  subtitle?: string;
  price: number;
  options?: ProductOption[];
}

export const ProductConfigDrawer = ({
  open,
  onOpenChange,
  image,
  title,
  subtitle = "Heerlijke vers bereide worstenbroodjes",
  price,
  options = [
    {
      id: "warm",
      label: "Warm",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    },
    {
      id: "koud",
      label: "Koud",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    },
  ],
}: ProductConfigDrawerProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

  const handleAddToCart = () => {
    console.log({ title, selectedOption, quantity, price });
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerClose className="absolute right-4 top-4 z-10">
          <Button variant="secondary" size="icon" className="rounded-full w-10 h-10">
            <X className="w-5 h-5" />
          </Button>
        </DrawerClose>

        <div className="overflow-y-auto">
          {/* Product Image */}
          <div className="w-full aspect-[16/9] overflow-hidden bg-muted">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <DrawerHeader className="text-center pb-4">
            <DrawerTitle className="text-2xl font-bold text-foreground">{title}</DrawerTitle>
            <DrawerDescription className="text-muted-foreground">
              {subtitle}
            </DrawerDescription>
          </DrawerHeader>

          {/* Options */}
          <div className="px-6 pb-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-foreground font-bold uppercase text-sm">
                  Warm of Koud
                </h3>
                <span className="text-xs text-muted-foreground uppercase">Required</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Choose one</p>

              <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                <div className="grid grid-cols-2 gap-4">
                  {options.map((option) => (
                    <div key={option.id} className="relative">
                      <RadioGroupItem
                        value={option.id}
                        id={option.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={option.id}
                        className="flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-card p-4 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                      >
                        <div className="w-full aspect-square rounded-lg overflow-hidden bg-muted">
                          <img
                            src={option.image}
                            alt={option.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-foreground font-semibold">{option.label}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-center gap-4 py-4">
              <Button
                variant="secondary"
                size="icon"
                onClick={handleDecrement}
                className="rounded-full w-10 h-10"
              >
                <Minus className="w-5 h-5" />
              </Button>
              <span className="w-12 text-center font-bold text-foreground text-xl">
                {quantity}
              </span>
              <Button
                variant="default"
                size="icon"
                onClick={handleIncrement}
                className="rounded-full w-10 h-10"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <DrawerFooter className="border-t border-border pt-4">
          <Button
            onClick={handleAddToCart}
            disabled={!selectedOption}
            className="w-full rounded-full py-6 text-base font-bold uppercase"
          >
            € {(price * quantity).toFixed(2)} Add to Cart
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
