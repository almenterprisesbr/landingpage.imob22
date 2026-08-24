import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { gate } from "@/data/site";

type Phase = "idle" | "playing" | "done";

/**
 * PORTAL DE ENTRADA IMERSIVO
 * --------------------------
 * idle    → vídeo roda mudo, em loop e desfocado ao fundo. A tela inteira é o botão.
 * playing → um clique em qualquer ponto reinicia o vídeo com som, em tela cheia.
 * done    → a cortina se abre, a rolagem é liberada e o site entra em cena.
 */
export function VideoGate({ onEnter }: { onEnter: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);

  // Trava a rolagem enquanto o portal estiver na frente.
  useEffect(() => {
    document.body.dataset.locked = phase === "done" ? "false" : "true";
  }, [phase]);

  const finish = useCallback(() => {
    setPhase("done");
    // Aguarda a cortina antes de liberar o conteúdo.
    window.setTimeout(onEnter, 900);
  }, [onEnter]);

  const start = useCallback(() => {
    if (phase !== "idle") return;
    const video = videoRef.current;
    setPhase("playing");
    if (!video) return;

    video.loop = false;
    video.muted = false;
    video.volume = 0.85;
    video.currentTime = 0;
    // Se o navegador bloquear o áudio, seguimos mudo em vez de travar a entrada.
    video.play().catch(() => {
      video.muted = true;
      void video.play();
    });
  }, [phase]);

  // Enter/Espaço também abrem o portal — acessibilidade de teclado.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase === "idle" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        start();
      }
      if (phase === "playing" && e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, start, finish]);

  const onTimeUpdate = () => {
    const video = videoRef.current;
    if (!video?.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  return (
    <AnimatePresence>
      {phase !== "done" ? (
        <motion.div
          key="gate"
          className="fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-ink"
          onClick={start}
          role={phase === "idle" ? "button" : undefined}
          tabIndex={phase === "idle" ? 0 : -1}
          aria-label={phase === "idle" ? gate.cta : undefined}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ---------- Vídeo ---------- */}
          <motion.video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={gate.videoSrc}
            poster={gate.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onTimeUpdate={onTimeUpdate}
            onEnded={finish}
            initial={{ scale: 1.14, filter: "blur(10px) brightness(0.5)" }}
            animate={
              phase === "playing"
                ? { scale: 1, filter: "blur(0px) brightness(1)" }
                : { scale: 1.14, filter: "blur(10px) brightness(0.5)" }
            }
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* ---------- Acabamento cinematográfico ---------- */}
          <div className="vignette grain absolute inset-0" />

          {/* ---------- Camada de convite (fase idle) ---------- */}
          <AnimatePresence>
            {phase === "idle" ? (
              <motion.div
                key="invite"
                className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.p
                  className="eyebrow"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.35 }}
                >
                  {gate.eyebrow}
                </motion.p>

                <motion.h1
                  className="mt-6 font-display font-semibold leading-none tracking-tightest text-sand"
                  style={{ fontSize: "clamp(2.7rem, 11vw, 9rem)" }}
                  initial={{ opacity: 0, y: 40, letterSpacing: "0.18em" }}
                  animate={{ opacity: 1, y: 0, letterSpacing: "-0.055em" }}
                  transition={{ duration: 1.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {gate.title}
                </motion.h1>

                <motion.p
                  className="mt-4 font-serif text-lg italic text-gold sm:text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.1 }}
                >
                  {gate.subtitle}
                </motion.p>

                {/* Pulso que convida ao toque */}
                <motion.div
                  className="mt-16 flex flex-col items-center gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-gold/60 animate-pulse-ring" />
                    <span
                      className="absolute inset-0 rounded-full border border-gold/40 animate-pulse-ring"
                      style={{ animationDelay: "0.9s" }}
                    />
                    <span className="glass flex h-16 w-16 items-center justify-center rounded-full">
                      <svg
                        width="19"
                        height="21"
                        viewBox="0 0 19 21"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M2 2v17l15-8.5L2 2z" fill="#E3A857" />
                      </svg>
                    </span>
                  </div>
                  <p className="font-display text-[0.66rem] uppercase tracking-label text-sand/60">
                    {gate.cta}
                  </p>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* ---------- Controles durante a reprodução ---------- */}
          <AnimatePresence>
            {phase === "playing" ? (
              <motion.div
                key="controls"
                className="absolute inset-x-0 bottom-0 p-6 sm:p-10"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display text-[0.62rem] uppercase tracking-label text-sand/55">
                    {gate.title}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      finish();
                    }}
                    className="glass rounded-full px-5 py-2.5 font-display text-[0.66rem] uppercase tracking-label text-sand/80 transition-colors duration-500 hover:text-gold"
                  >
                    {gate.skip}
                  </button>
                </div>
                <div className="mt-5 h-px w-full bg-sand/15">
                  <div
                    className="h-px bg-gold transition-[width] duration-200 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
