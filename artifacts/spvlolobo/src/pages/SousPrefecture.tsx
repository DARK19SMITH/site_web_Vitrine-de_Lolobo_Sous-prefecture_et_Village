import { FC } from "react";
import { motion } from "framer-motion";
import { Building, Map, Flag, Users2, Droplets, Wheat, BookOpen, Heart, Compass } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BaouleDecor } from "@/components/decor/BaouleDecor";

const SousPrefecture: FC = () => {
  const villages = [
    "Lolobo", "N'zengouanou", "Appani-Mangouakro", "Alloko-Sakassou",
    "Ahounzè", "Grohoblé", "Yohouzou", "Blandéfla", "Koffikro",
    "Prikro", "Assohoun", "Kouamékro", "Anouan", "Sièhoulétiè", "Bodokro-Gôly"
  ];

  return (
    <PageWrapper title="Sous-préfecture de Lolobo">
      {/* Header */}
      <div className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <BaouleDecor type="zigzag" className="absolute top-20 left-0 w-full opacity-10 text-secondary" />
          <BaouleDecor type="zigzag" className="absolute bottom-10 left-0 w-full opacity-10 text-primary" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Building className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4"
          >
            Sous-préfecture de <span className="text-secondary">Lolobo</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Créée par décret N° 2010-230 du 25 août 2010 · Ouverte le 28 mars 2017
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          <Card icon={<Flag className="text-accent" />} title="Chef-lieu" value="Lolobo" />
          <Card icon={<Map className="text-secondary" />} title="Département" value="Béoumi" />
          <Card icon={<Map className="text-primary" />} title="Région" value="Gbêkê" />
          <Card icon={<Users2 className="text-green-600" />} title="Population" value="11 820 hab." />
          <Card icon={<Building className="text-orange-500" />} title="Villages" value="15 villages" />
          <Card icon={<Compass className="text-blue-500" />} title="District" value="Vallée du Bandama" />
        </div>

        {/* Création & Histoire */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-br from-secondary/5 to-primary/5 border border-border rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
            Création & Histoire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-3 text-lg">Création officielle</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La sous-préfecture de Lolobo a été créée par le <strong className="text-foreground">décret N° 2010-230 du 25 août 2010</strong>, portant création de 103 sous-préfectures. Elle est issue du démembrement de la sous-préfecture de Bodokro, chef-lieu du canton Gôly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La sous-préfecture est constituée de <strong className="text-foreground">15 villages</strong>, rattachés à deux tribus : <em>Kouamékro-Anouan</em> (chef-lieu : Lolobo) et <em>Sièhoulétiè</em> (chef-lieu : Ahounzè).
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 text-lg">Ouverture</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La sous-préfecture a été ouverte le <strong className="text-foreground">vendredi 28 mars 2017</strong> par Mademoiselle GOUÉ Rosine Prisca, nommée par décret n° 2016-208 du 28 décembre 2016.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le chef-lieu est un regroupement de quatre villages : <strong className="text-foreground">Lolobo, N'zengouanou, Appani-Mangouakro et Alloko-Sakassou</strong>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sous-Préfets Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Les <span className="text-secondary">Sous-Préfets</span> de Lolobo
            </h2>
            <p className="text-muted-foreground text-lg">Ceux et celles qui ont gouverné notre sous-préfecture</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-10">

            {/* Sous-Préfet 1 — GOUÉ Rosine Prisca */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-64 lg:w-72 flex-shrink-0 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center min-h-[220px]">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Flag className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Photo à venir</p>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 w-fit">
                  1ère Sous-Préfet
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  Mlle GOUÉ Rosine Prisca
                </h3>
                <p className="text-sm font-semibold text-primary mb-4">
                  28 mars 2017 — 30 juin 2021
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Première sous-préfet de Lolobo, nommée par décret n° 2016-208 du 28 décembre 2016. Elle a officiellement ouvert la sous-préfecture le 28 mars 2017 et a assuré sa direction pendant plus de quatre ans.
                </p>
              </div>
            </motion.div>

            {/* Sous-Préfet 2 — KOUAKOU Amoin Chantal */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse"
            >
              <div className="md:w-64 lg:w-72 flex-shrink-0 grid grid-cols-2 gap-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/sousPrefet2_portrait.jpg`}
                  alt="KOUAKOU Amoin Chantal — portrait officiel"
                  className="w-full h-full object-cover object-top"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/sousPrefet2_cérémonie.jpg`}
                  alt="KOUAKOU Amoin Chantal — cérémonie"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 w-fit">
                  2ème Sous-Préfet
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  Mlle KOUAKOU Amoin Chantal
                </h3>
                <p className="text-xs text-muted-foreground mb-1">Sous-Préfet, Grade III, 1er échelon</p>
                <p className="text-sm font-semibold text-primary mb-4">
                  30 juin 2021 — 18 janvier 2023
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Deuxième sous-préfet de Lolobo, elle a succédé à Mlle GOUÉ Rosine Prisca et poursuivi le développement administratif et communautaire de la circonscription.
                </p>
              </div>
            </motion.div>

            {/* Sous-Préfet 3 */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-64 lg:w-72 flex-shrink-0 grid grid-cols-2 gap-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/sousPrefet3_bureau.jpg`}
                  alt="3ème Sous-Préfet — dans son bureau"
                  className="w-full h-full object-cover object-top"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/sousPrefet3_portrait.jpg`}
                  alt="3ème Sous-Préfet — portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <span className="inline-block bg-accent/20 text-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 w-fit">
                  3ème Sous-Préfet
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  À compléter
                </h3>
                <p className="text-sm font-semibold text-primary mb-4">
                  18 janvier 2023 — 26 mars 2024
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Troisième sous-préfet à avoir gouverné la sous-préfecture de Lolobo, ayant poursuivi les efforts de développement administratif et communautaire de la circonscription.
                </p>
              </div>
            </motion.div>
             {/* Sous-Préfet 4 — ALOKO N'GUESSAN */}
<motion.div
  initial={{ x: 30, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse bg-card border-2 border-green-500 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse"
>
  <div className="md:w-64 lg:w-72 flex-shrink-0">
    <img
      src={`${import.meta.env.BASE_URL}images/sousPrefet4_portrait.jpg.jpeg`}
      alt="Mme ALOKO N'GUESSAN — portrait officiel"
      className="w-full h-full object-cover object-top"
    />
  </div>
  <div className="p-8 flex-1 flex flex-col justify-center">
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit">
        4ème Sous-Préfet
      </span>
      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit flex items-center gap-1">
        ● En fonction
      </span>
    </div>
    <h3 className="text-2xl font-display font-bold text-foreground mb-1">
      Mme ALOKO N'GUESSAN
    </h3>
    <p className="text-sm text-muted-foreground italic mb-1">
      née CHO ANGE LESLIE MICHELLE
    </p>
    <p className="text-sm font-semibold text-primary mb-4">
      Depuis le 14 août 2025
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Quatrième et actuelle sous-préfet de Lolobo, Mme ALOKO N'GUESSAN poursuit le développement administratif et communautaire de la circonscription depuis sa prise de fonction en août 2025.
    </p>
  </div>
</motion.div>

          </div>
        </div>

        {/* Événement : Remise ambulance */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Réalisations & <span className="text-primary">Événements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-secondary to-secondary/80 p-8 text-white">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className="bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Santé</span>
                <span className="text-white/70 text-sm font-medium">18 mai 2024</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Remise d'une ambulance au Centre de Santé Urbain de Lolobo
              </h3>
              <p className="text-white/85 text-lg">
                Don du Député <strong className="text-accent">KOUAMÉ Attingré</strong> aux populations de la sous-préfecture de Lolobo
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { src: "ambulance1.jpg", alt: "Cérémonie de remise de l'ambulance" },
                  { src: "ambulance2.jpg", alt: "Photo de groupe devant le CSU de Lolobo" },
                  { src: "ambulance3.jpg", alt: "Remise des clés de l'ambulance" },
                  { src: "ambulance4.jpg", alt: "Discours devant le Centre de Santé de Lolobo" },
                ].map((img, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.03 }} className="overflow-hidden rounded-2xl aspect-square shadow-md">
                    <img src={`${import.meta.env.BASE_URL}images/${img.src}`} alt={img.alt} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden bg-black shadow-xl">
                <video controls className="w-full max-h-[480px]" poster={`${import.meta.env.BASE_URL}images/ambulance1.jpg`}>
                  <source src={`${import.meta.env.BASE_URL}images/ambulance.mp4`} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 italic">
                Vidéo — Cérémonie officielle de remise de l'ambulance, 18 mai 2024
              </p>
            </div>
          </motion.div>
        </div>

        {/* Géographie & Limites */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-lg border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 font-display border-b border-border pb-4 flex items-center gap-2">
              <Compass className="text-primary" /> Situation Géographique
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La sous-préfecture de Lolobo fait partie du <strong className="text-foreground">département de Béoumi</strong>, dans la région de Gbêkê, elle-même relevant du district de la vallée de Bandama, situé au centre de la Côte d'Ivoire.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { dir: "Nord", val: "S/P de Bodokro et Botro" },
                { dir: "Sud", val: "S/P de Béoumi et Languibonou" },
                { dir: "Est", val: "S/P de Diabo" },
                { dir: "Ouest", val: "S/P de Kondrobo" },
              ].map((l) => (
                <div key={l.dir} className="bg-muted/50 p-3 rounded-xl">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{l.dir}</p>
                  <p className="text-sm text-foreground font-medium">{l.val}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-lg border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 font-display border-b border-border pb-4 flex items-center gap-2">
              <Droplets className="text-secondary" /> Hydrographie & Climat
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              La circonscription est bordée par le <strong className="text-foreground">fleuve Bandama blanc</strong> et couverte par la <strong className="text-foreground">savane arborée</strong>. La température moyenne oscille entre <strong className="text-foreground">30 et 35°C</strong>.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground text-sm"><span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>2 saisons pluvieuses (mi-mars à mi-juillet / sept.–oct.)</li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm"><span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>2 saisons sèches (mi-juillet–fin août / nov.–mi-mars)</li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm"><span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>Harmattan de décembre à mi-février</li>
            </ul>
          </motion.div>
        </div>

        {/* Services & Économie */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7 space-y-8">

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl shadow-lg border border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 font-display border-b border-border pb-4 flex items-center gap-2">
                <BookOpen className="text-secondary" /> Services Administratifs
              </h2>
              <ul className="space-y-3">
                {[
                  "Centre de Santé Urbain (CSU) de Lolobo",
                  "Dispensaire rural d'Ahounzè",
                  "Bureau de l'ANADER",
                  "11 écoles primaires publiques (dont 3 au chef-lieu)",
                  "Collège privé « Excellence Divine »",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                    <p className="text-muted-foreground">{s}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl shadow-lg border border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 font-display border-b border-border pb-4 flex items-center gap-2">
                <Wheat className="text-primary" /> Activités Économiques
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-1">Agriculture (secteur principal)</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Culture d'anacarde (depuis 2 décennies), cultures vivrières (riz, manioc, igname, arachide) et maraîchères (laitue, concombre, tomate, haricot vert). Marché hebdomadaire chaque <strong className="text-foreground">vendredi</strong>.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Élevage</h4>
                  <p className="text-muted-foreground text-sm">À usage essentiellement domestique. 3 parcs de bovins sur le territoire.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Commerce & Services</h4>
                  <p className="text-muted-foreground text-sm">Petits commerces, ateliers de couture, coiffure, ferronnerie. Transport : liaison Lolobo–Bouaké assurée par une dizaine de véhicules.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Villages List */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-secondary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden h-full"
            >
              <BaouleDecor type="adinkra-watermark" className="absolute top-0 right-0 text-white/10" />
              <h2 className="text-2xl font-bold mb-2 font-display relative z-10">Les 15 Villages</h2>
              <p className="text-white/70 text-sm mb-6 relative z-10">Deux tribus : Kouamékro-Anouan (chef-lieu : Lolobo) et Sièhoulétiè (chef-lieu : Ahounzè)</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {villages.map((village, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-accent hover:text-secondary-foreground transition-colors cursor-default"
                  >
                    {village}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

const Card: FC<{ icon: React.ReactNode, title: string, value: string }> = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-card p-4 rounded-2xl shadow-md border border-border flex flex-col items-center text-center gap-2"
  >
    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs text-muted-foreground font-medium">{title}</p>
      <p className="text-sm font-bold text-foreground">{value}</p>
    </div>
  </motion.div>
)

export default SousPrefecture;
