import { FC } from "react";
import { Link } from "wouter";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BaouleDecor } from "@/components/decor/BaouleDecor";

const NotFound: FC = () => {
  return (
    <PageWrapper title="404 - Page non trouvée">
      <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-background">
        <BaouleDecor type="adinkra-watermark" className="absolute opacity-5 w-full h-full" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-9xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-6">Chemin perdu dans la savane</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Il semble que la page que vous recherchez ait été déplacée ou n'existe plus.
          </p>
          <Link href="/" className="inline-flex px-8 py-4 bg-secondary text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
            Retourner au Village
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
