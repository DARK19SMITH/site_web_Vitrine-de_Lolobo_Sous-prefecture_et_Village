import { FC } from "react";
import { motion } from "framer-motion";
import { Heart, Target, CheckCircle2, Phone } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BaouleDecor } from "@/components/decor/BaouleDecor";

const AOL: FC = () => {
  return (
    <PageWrapper title="AOL - Akounda Oufle de Lolobo">
      {/* Hero */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/aol-community.png`}
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
            <motion.img
              src={`${import.meta.env.BASE_URL}images/logo-aol.jpg`}
              alt="Logo AOL — Akounda Ouflê de Lolobo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-56 md:w-72 rounded-2xl shadow-2xl flex-shrink-0"
            />
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-accent text-secondary-foreground text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
                Association Villageoise
              </span>
              <motion.h1
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
              >
                Akounda Ouflê de <span className="text-accent">Lolobo</span>
              </motion.h1>
              <motion.p
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                Ensemble nous le pouvons !
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <BaouleDecor type="kente-strip" className="h-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="text-primary" /> Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                L'AOL (Akounda Ouflê de Lolobo) est l'association de développement exclusive du village. Créée par les fils et filles de Lolobo, elle a pour but principal d'améliorer les conditions de vie locales et de promouvoir la solidarité.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex items-start gap-3">
                  <Target className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Éducation</h4>
                    <p className="text-sm text-muted-foreground">Bourses, soutien scolaire, entretien des écoles.</p>
                  </div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex items-start gap-3">
                  <Target className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Santé</h4>
                    <p className="text-sm text-muted-foreground">Fourniture d'équipements au centre de santé.</p>
                  </div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex items-start gap-3">
                  <Target className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Culture</h4>
                    <p className="text-sm text-muted-foreground">Organisation des festivités et préservation du patrimoine.</p>
                  </div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex items-start gap-3">
                  <Target className="text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Infrastructures</h4>
                    <p className="text-sm text-muted-foreground">Pompes hydrauliques, reprofilage des voies.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Activités & Réalisations</h2>
              <ul className="space-y-4">
                {[
                  "Construction de salles de classe additionnelles pour l'école primaire.",
                  "Organisation annuelle de la journée de l'excellence récompensant les meilleurs élèves.",
                  "Don de matériel biomédical à la maternité de Lolobo.",
                  "Entretien régulier de la pompe hydraulique villageoise."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-aol.jpg`}
                alt="Logo AOL"
                className="w-48 rounded-2xl shadow-lg"
              />
            </div>

            {/* Bureau Executif */}
            <div className="bg-secondary text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-display font-bold mb-6 text-accent">Bureau Exécutif</h3>
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Président</p>
                  <p className="font-bold text-lg">Nestor SARAKA</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Vice-Président</p>
                  <p className="font-bold text-lg">Léon KOUADIO</p>
                  <p className="text-xs text-white/60 mt-1">Relations institutionnelles & extérieures</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Secrétaire Général</p>
                  <p className="font-bold text-lg">Benjamin KOUADIO</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Président Abidjan</p>
                  <p className="font-bold text-lg">Honoré</p>
                  <p className="text-xs text-white/60 mt-1">Remobilisation des membres extérieurs</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Trésorerie</p>
                  <p className="font-bold text-lg">Monique & Viviane</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-display font-bold mb-6">Nous Contacter</h3>
              <p className="mb-6 opacity-90">Vous souhaitez adhérer ou soutenir nos projets ?</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg">
                  <Phone />
                  <span className="font-medium">+225 07 07 67 22 58</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Organigramme complet */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Organigramme du <span className="text-secondary">Bureau Exécutif</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden p-4 md:p-8">
            <img
              src={`${import.meta.env.BASE_URL}images/bureau-executif.jpg`}
              alt="Organigramme du Bureau Exécutif de l'AOL"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};
export default AOL;
