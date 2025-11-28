import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  isConfigurable?: boolean;
}

export const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  badge,
  isConfigurable = false,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(0, quantity - 1));

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <div className="flex items-center gap-2">
          {oldPrice && (
            <span className="text-muted-foreground line-through text-sm">
              € {oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-foreground font-semibold">
            € {price.toFixed(2)}
          </span>
        </div>
        {badge && (
          <Badge variant="secondary" className="mt-2 bg-success text-success-foreground">
            {badge}
          </Badge>
        )}
      </div>

      {isConfigurable ? (
        <Button variant="default" className="rounded-full px-6">
          CONFIGURE
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          {quantity > 0 && (
            <Button
              variant="secondary"
              size="icon"
              onClick={handleDecrement}
              className="rounded-full w-8 h-8"
            >
              <Minus className="w-4 h-4" />
            </Button>
          )}
          <span className="w-8 text-center font-semibold text-foreground">
            {quantity}
          </span>
          <Button
            variant="default"
            size="icon"
            onClick={handleIncrement}
            className="rounded-full w-8 h-8"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
