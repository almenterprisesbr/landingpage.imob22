import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Contato } from "./components/Contato";
import { Edificio } from "./components/Edificio";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Lazer } from "./components/Lazer";
import { Localizacao } from "./components/Localizacao";
import { Nav } from "./components/Nav";
import { Obra } from "./components/Obra";
import { Opening } from "./components/Opening";
import { Planta } from "./components/Planta";
import { SectionRail } from "./components/ui/SectionRail";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  // A página só é montada quando o painel da introdução termina de subir.
  // Assim a primeira animação de cada seção acontece com o usuário olhando.
  const [entered, setEntered] = useState(false);

  return (
    <>
      <Intro onDone={() => setEntered(true)} />

      <AnimatePresence>
        {entered ? (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Nav />
            <Opening />
            <Edificio />
            <Planta />
            <Lazer />
            <Obra />
            <Localizacao />
            <Contato />
            <Footer />
            <SectionRail />
            <WhatsAppFloat />
          </motion.main>
        ) : null}
      </AnimatePresence>
    </>
  );
}
