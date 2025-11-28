interface PromoCardProps {
  title: string;
  description: string;
}

export const PromoCard = ({ title, description }: PromoCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 flex items-center gap-4 hover:bg-card/80 transition-colors cursor-pointer">
      <div className="relative flex-shrink-0">
        <div className="w-24 h-24 bg-promo rounded-2xl flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-20 h-20">
            <defs>
              <radialGradient id="promoGradient">
                <stop offset="0%" stopColor="hsl(var(--promo))" />
                <stop offset="100%" stopColor="hsl(5 75% 45%)" />
              </radialGradient>
            </defs>
            <path
              d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
              fill="url(#promoGradient)"
              stroke="hsl(var(--promo-foreground))"
              strokeWidth="2"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-promo-foreground font-black text-sm">
            PROMO
          </span>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};
