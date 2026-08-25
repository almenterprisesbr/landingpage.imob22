import { motion, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";

/**
 * Envolve uma imagem e faz uma etiqueta pequena seguir o cursor por cima
 * dela — o toque de "portfólio" que diferencia de um card estático.
 * Sem estado global, sem listener na janela: cada instância só escuta o
 * próprio elemento.
 */
export function CursorTag({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <motion.span
        className="pointer-events-none absolute left-0 top-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream px-4 py-2 font-display text-[0.62rem] font-medium uppercase tracking-label text-ink lg:flex"
        style={{ x, y }}
        initial={false}
        animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.6 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.span>
    </div>
  );
}
