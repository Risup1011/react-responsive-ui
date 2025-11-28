import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  "WORSTEN BROODJES",
  "BOLLETJES",
  "Bruin en wit brood",
  "Desem en speciaal",
  "Meergranen brood",
];

export const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="sticky top-[73px] z-40 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              onClick={() => setActiveCategory(category)}
              className="whitespace-nowrap rounded-xl flex items-center gap-2"
            >
              <List className="w-4 h-4" />
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
