import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

/**
 * Botão que se desloca sutilmente em direção ao cursor.
 * O puxão é pequeno de propósito — o objetivo é dar peso físico ao clique,
 * não fazer o botão perseguir o mouse pela tela.
 */
export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
  type,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: "submit" | "button";
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 16, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 16, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.32);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref as never}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      type={type}
      className={className}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Comp>
  );
}
