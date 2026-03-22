import { FC } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Users, Sun, HeartHandshake } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BaouleDecor } from "@/components/decor/BaouleDecor";

const Village: FC = () => {

  return (
    <PageWrapper title="Le Village">
      {/* Hero Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <BaouleDecor type="adinkra-watermark" className="absolute top-0 right-0 w-96 h-96 text-white/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Le Village de <span className="text-accent">Lolobo</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Terre de traditions, de culture et de convivialité au cœur de la Côte d'Ivoire.
          </motion.p>
        </div>
      </div>

      <BaouleDecor type="kente-strip" className="h-6" />

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Histoire & Géo */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">Histoire & Géographie</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Lolobo est un prestigieux village niché dans la région de Gbêkê, précisément dans le département de Béoumi en Côte d'Ivoire.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bénéficiant d'un climat de savane arborée et bordé par le fleuve Bandama blanc, le village offre un cadre de vie naturel exceptionnel, propice à l'agriculture et au ressourcement spirituel.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-border h-80">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31627.979392728477!2d-5.405982969124247!3d7.736942381303287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb81ff1bac0bbfb%3A0xc842913935e5428d!2sLolobo!5e0!3m2!1sfr!2sci!4v1773990309208!5m2!1sfr!2sci"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </section>

        <BaouleDecor type="zigzag" className="opacity-20" />

        {/* Population & Culture */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-3xl -rotate-3 transform"></div>
            {/* abstract african pattern */}
            <img src={`${import.meta.env.BASE_URL}images/hero-bg.png`} alt="Culture locale" className="rounded-3xl relative z-10 w-full h-80 object-cover shadow-xl" />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground">
                <Users size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">Population & Culture</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Avec une population d'environ <strong>5 000 habitants</strong>, Lolobo est un village vivant et solidaire.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              La culture y est célébrée à travers les danses traditionnelles comme l'Adjoukrou, les festivals annuels de récolte, et un artisanat raffiné (poterie, tissage de pagnes Kita/Kente).
            </p>
          </div>
        </section>

        {/* Activités */}
        <section className="bg-card p-10 rounded-3xl shadow-xl border border-card-border relative overflow-hidden">
          <BaouleDecor type="adinkra-watermark" className="absolute bottom-0 right-0 w-64 h-64 text-primary/5" />
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Sun size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground">Économie & Activités</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
            <div className="bg-background p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-secondary mb-3">Agriculture</h3>
              <p className="text-muted-foreground">Nous avons comme culture de rente le noix de cajou (Anacarde).</p>
            </div>
            <div className="bg-background p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-secondary mb-3">Élevage</h3>
              <p className="text-muted-foreground">Élevage traditionnel de volaille et de petit bétail assurant la sécurité alimentaire locale.</p>
            </div>
            <div className="bg-background p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-secondary mb-3">Artisanat</h3>
              <p className="text-muted-foreground">Création de pagnes traditionnels, sculpture sur bois et poterie transmis de génération en génération.</p>
            </div>
          </div>
        </section>

        {/* Link to AOL */}
        <section className="text-center py-10">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <Link 
              href="/aol"
              className="bg-secondary text-white px-10 py-6 rounded-2xl shadow-xl flex items-center gap-6 group hover:bg-secondary/90 transition-colors border-b-4 border-accent"
            >
              <div className="bg-white/20 p-4 rounded-full">
                <HeartHandshake size={32} className="text-accent" />
              </div>
              <div className="text-left">
                <span className="block text-sm uppercase tracking-widest text-white/70 mb-1">Association</span>
                <span className="block text-2xl font-bold font-display">Découvrez l'AOL</span>
                <span className="block text-sm text-white/90">Akounda Ouflê de Lolobo</span>
              </div>
            </Link>
          </motion.div>
        </section>

      </div>
    </PageWrapper>
  );
};
export default Village;
