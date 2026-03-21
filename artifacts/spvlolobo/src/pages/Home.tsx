import { FC } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Map, Building2 } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BaouleDecor, FloatingElement } from "@/components/decor/BaouleDecor";

const Home: FC = () => {
  return (
    <PageWrapper title="Accueil">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Baoule Background" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
          />
          {/* landing page hero scenic mountain landscape fallbacks if needed */}
          <img 
            src={`${import.meta.env.BASE_URL}images/village-landscape.png`} 
            alt="Lolobo Village" 
            className="absolute inset-0 w-full h-full object-cover object-center -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        {/* Floating Decorative Elements */}
        <FloatingElement className="top-1/4 left-10 md:left-20" delay={0}>
          <BaouleDecor type="cowrie" className="w-8 h-12 text-accent/80" />
        </FloatingElement>
        <FloatingElement className="top-1/3 right-10 md:right-32" delay={1.5}>
          <BaouleDecor type="cowrie" className="w-6 h-10 text-primary/80" />
        </FloatingElement>
        <FloatingElement className="bottom-1/4 left-1/4" delay={3}>
          <img src={`${import.meta.env.BASE_URL}images/baoule-mask.png`} alt="Mask" className="w-16 h-24 opacity-60 drop-shadow-2xl" />
        </FloatingElement>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 drop-shadow-2xl text-glow-gold">
              Akwaba à <span className="text-primary block md:inline">Lolobo</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light"
          >
            Découvrez le cœur battant de la région de Gbêkê. Un carrefour de traditions, de développement et de fraternité en Côte d'Ivoire.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              href="/village"
              className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-orange-600 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Map className="group-hover:rotate-12 transition-transform" />
              Découvrir le Village
            </Link>
            
            <Link 
              href="/sous-prefecture"
              className="px-8 py-4 rounded-xl font-bold text-lg bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Building2 className="group-hover:-translate-y-1 transition-transform" />
              La Sous-préfecture
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-white/60 text-sm font-medium tracking-widest uppercase">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <BaouleDecor type="zigzag" className="absolute top-0 left-0 w-full opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Notre Identité</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                L'Harmonie entre <span className="text-secondary">Tradition</span> et <span className="text-accent">Modernité</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Lolobo n'est pas seulement un village, c'est une institution culturelle et administrative. En tant que chef-lieu de sous-préfecture, il rayonne sur de nombreux villages rattachés tout en préservant jalousement ses racines ancestrales.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ici, les chants des tam-tams parleurs résonnent en harmonie avec les cloches de nos écoles, symbolisant un peuple fier de son passé et résolument tourné vers le développement.
              </p>
              
              <Link href="/village" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
                Plonger dans notre histoire
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                {/* african cultural art drum */}
                <img 
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80" 
                  alt="Culture" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg transform translate-y-8"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vidéo Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Média</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Lolobo en <span className="text-secondary">Vidéo</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Découvrez notre communauté à travers ce reportage vidéo
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20"
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ByZij7CHdOg"
                title="Lolobo — Vidéo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};
export default Home; // Will be exported in App.tsx but defining it clearly
