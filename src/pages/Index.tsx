import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { PromoCard } from "@/components/PromoCard";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-6">
        {/* Deals Section */}
        <section className="mb-8">
          <h2 className="text-muted-foreground text-sm font-medium mb-4">Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PromoCard
              title="Zonnebloem actie!"
              description="Bij aankoop van 4 Zonnebloem broden broden krijg je 1 brood gratis."
            />
            <PromoCard
              title="Openingsaanbieding"
              description="Bij uw eerste aankoop krijgt u 10% korting"
            />
          </div>
        </section>

        {/* Products in Deals */}
        <section className="mb-8">
          <h2 className="text-foreground text-xl font-bold mb-4">Products in deals</h2>
          <div className="bg-card rounded-2xl p-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop"
              title="Zonnebloembrood"
              price={3.79}
              badge="Zonnebloem actie!"
            />
          </div>
        </section>

        {/* WORSTEN BROODJES */}
        <section className="mb-8">
          <h2 className="text-muted-foreground text-sm font-medium mb-4 uppercase">
            WORSTEN BROODJES
          </h2>
          <div className="bg-card rounded-2xl divide-y divide-border">
            <div className="p-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop"
                title="Worstenbroodjes"
                price={2.0}
                oldPrice={3.25}
                isConfigurable={true}
              />
            </div>
          </div>
        </section>

        {/* BOLLETJES */}
        <section className="mb-8">
          <h2 className="text-muted-foreground text-sm font-medium mb-4 uppercase">
            BOLLETJES
          </h2>
          <div className="bg-card rounded-2xl divide-y divide-border">
            <div className="p-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop"
                title="Witte bollen bestellen per 6"
                price={3.0}
                isConfigurable={true}
              />
            </div>
            <div className="p-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop"
                title="Witte bollen bestellen per 12"
                price={6.0}
                isConfigurable={true}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
