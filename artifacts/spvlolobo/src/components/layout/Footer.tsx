import { FC } from "react";
import { Link } from "wouter";
import { Phone, MapPin, Mail } from "lucide-react";
import { BaouleDecor } from "@/components/decor/BaouleDecor";

export const Footer: FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden mt-20">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <BaouleDecor type="adinkra-watermark" className="w-full h-full" />
      </div>
      
      <BaouleDecor type="kente-strip" className="h-4 w-full absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-display font-bold text-accent mb-4">SPVLolobo</h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Portail officiel du village de Lolobo et de sa sous-préfecture. 
              Mettant en lumière notre riche héritage culturel et notre vision pour l'avenir.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-accent/30 pb-2 inline-block">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Accueil</Link></li>
              <li><Link href="/village" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Le Village</Link></li>
              <li><Link href="/sous-prefecture" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> La Sous-préfecture</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-accent/30 pb-2 inline-block">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Lolobo, Région de Gbêkê<br/>Département de Béoumi, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <span>+225 07 07 67 22 58</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <span>golyloloboakoundaoufle@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} SPVLolobo. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-secondary-foreground/60">
          Conçu par <a href="https://migueldevportofolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors font-semibold">Miguel Koffi</a>
        </p>

      </div>
    </footer>
  );
};