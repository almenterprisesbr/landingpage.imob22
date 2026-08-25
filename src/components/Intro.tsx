import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { intro } from "@/data/site";
import { Opening } from "./Opening";

type Phase = "playing" | "frozen" | "opening" | "done";

/** Tempo que o letreiro respira antes do painel começar a subir. */
const BEAT_MS = 1500;
const RISE_MS = 1500;

/**
 * INTRODUÇÃO IMERSIVA
 * -------------------
 * playing → o vídeo roda sozinho, mudo, em tela cheia.
 * frozen  → congela no último quadro; o wordmark abre flanqueando a torre.
 * opening → um painel creme sobe do rodapé e toma a tela, revelando o conteúdo.
 * done    → a introdução sai e a página assume, já rolada no topo.
 *
 * O painel que sobe e a primeira seção da página têm o mesmo fundo e o mesmo
 * layout, então a troca no fim da animação é invisível.
 */
export function Intro({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("playing");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.dataset.locked = phase === "done" ? "false" : "true";
  }, [phase]);

  const open = useCallback(() => {
    setPhase((current) => (current === "frozen" ? "opening" : current));
  }, []);

  /** Prende o vídeo no último quadro. Sem duração conhecida (falha de
   *  carregamento), apenas pausa e deixa o poster à mostra. */
  const holdLastFrame = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = Math.max(0, video.duration - 0.05);
    }
  }, []);

  // Congela no último quadro em vez de deixar o vídeo sumir.
  const handleEnded = useCallback(() => {
    holdLastFrame();
    setPhase("frozen");
  }, [holdLastFrame]);

  // Se o navegador barrar o autoplay, vai direto para o quadro congelado.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      setPhase("frozen");
      return;
    }
    video.play().catch(() => setPhase("frozen"));
  }, [reduceMotion]);

  // Depois da batida, o painel sobe sozinho — mas qualquer gesto antecipa.
  useEffect(() => {
    if (phase !== "frozen") return;
    const timer = window.setTimeout(open, BEAT_MS);
    const onKey = (e: KeyboardEvent) => {
      if (["Enter", " ", "ArrowDown", "PageDown"].includes(e.key)) open();
    };
    window.addEventListener("wheel", open, { passive: true, once: true });
    window.addEventListener("touchstart", open, { passive: true, once: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("wheel", open);
      window.removeEventListener("touchstart", open);
      window.removeEventListener("keydown", onKey);
    };
  }, [phase, open]);

  // Enquanto o vídeo roda, um clique pula direto para o quadro final.
  const skip = () => {
    if (phase !== "playing") return;
    handleEnded();
  };

  const showMark = phase !== "playing";

  return (
    <AnimatePresence>
      {phase !== "done" ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* ---------- Vídeo ---------- */}
          <div className="absolute inset-0" onClick={skip}>
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={intro.poster}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleEnded}
              onError={handleEnded}
            >
              <source src={intro.video} type="video/mp4" />
            </video>
            <div className="vignette grain absolute inset-0" />
            {/* Escurece de leve quando o letreiro entra, para o texto ganhar contraste */}
            <motion.div
              className="absolute inset-0 bg-ink"
              initial={{ opacity: 0 }}
              animate={{ opacity: showMark ? 0.28 : 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* ---------- Wordmark flanqueando a torre ----------
              Os rótulos pequenos vão para as bordas: no centro a fachada é
              clara demais e engoliria texto fino. */}
          <AnimatePresence>
            {showMark && phase !== "opening" ? (
              <motion.div
                key="mark"
                className="pointer-events-none absolute inset-0"
                exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Véus superior e inferior: garantem contraste sem escurecer o render */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/75 to-transparent" />

                <motion.p
                  className="eyebrow absolute inset-x-0 top-9 text-center text-cream/75"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                >
                  {intro.eyebrow}
                </motion.p>

                {/* As duas metades abrem a partir do centro, liberando a torre */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 px-6 lg:justify-between lg:gap-0 lg:px-[4vw]">
                  {[intro.markLeft, intro.markRight].map((half, i) => (
                    <span key={half}>
                      <motion.span
                        className="h-hero block text-cream [text-shadow:0_2px_40px_rgba(10,12,15,0.55)]"
                        initial={{ x: i === 0 ? "45%" : "-45%", opacity: 0, filter: "blur(10px)" }}
                        animate={{ x: "0%", opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {half}
                      </motion.span>
                    </span>
                  ))}
                </div>

                <motion.p
                  className="eyebrow absolute bottom-10 left-6 text-gold lg:left-[4vw]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                >
                  {intro.location}
                </motion.p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* ---------- Sugestão de entrada ---------- */}
          <AnimatePresence>
            {phase === "frozen" ? (
              <motion.div
                key="hint"
                className="pointer-events-none absolute bottom-10 right-6 flex flex-col items-center gap-3 lg:right-[4vw]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <span className="eyebrow text-cream/55">{intro.hint}</span>
                <span className="h-10 w-px overflow-hidden bg-cream/15">
                  <span className="block h-full w-px bg-gold animate-scroll-hint" />
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* ---------- O painel creme que sobe ----------
              Recortado por clip-path em vez de animar altura: o recorte roda no
              compositor, então a subida fica fluida e o conteúdo por baixo não
              se mexe — ele vai sendo descoberto de baixo para cima. */}
          <AnimatePresence>
            {phase === "opening" ? (
              <motion.div
                key="panel"
                className="absolute inset-0 bg-cream"
                initial={{ clipPath: "inset(100% 6vw 0% 6vw round 28px 28px 0px 0px)" }}
                animate={{ clipPath: "inset(0% 0vw 0% 0vw round 0px 0px 0px 0px)" }}
                transition={{ duration: RISE_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
                onAnimationComplete={() => {
                  setPhase("done");
                  onDone();
                }}
              >
                <Opening />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
