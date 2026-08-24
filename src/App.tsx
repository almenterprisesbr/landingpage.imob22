import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Contato } from "./components/Contato";
import { Depoimentos } from "./components/Depoimentos";
import { Footer } from "./components/Footer";
import { Galeria } from "./components/Galeria";
import { Hero } from "./components/Hero";
import { Lazer } from "./components/Lazer";
import { Localizacao } from "./components/Localizacao";
import { Manifesto } from "./components/Manifesto";
import { Nav } from "./components/Nav";
import { Unidades } from "./components/Unidades";
import { VideoGate } from "./components/VideoGate";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  // O site só é montado depois que o portal de vídeo se abre —
  // assim a primeira animação de cada seção acontece com o usuário olhando.
  const [entered, setEntered] = useState(false);

  return (
    <>
      <VideoGate onEnter={() => setEntered(true)} />

      <AnimatePresence>
        {entered ? (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Nav />
            <Hero />
            <Manifesto />
            <Unidades />
            <Lazer />
            <Galeria />
            <Localizacao />
            <Depoimentos />
            <Contato />
            <Footer />
            <WhatsAppFloat />
          </motion.main>
        ) : null}
      </AnimatePresence>
    </>
  );
}
