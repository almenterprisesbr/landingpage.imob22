import { useState } from "react";

/** Imagem com reserva em degradê, caso o arquivo ainda não exista. */
export function Figure({
  src,
  alt,
  className = "",
  imgClassName = "",
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`relative grain overflow-hidden bg-ink-3 ${className}`} role="img" aria-label={alt}>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg,#1A1F26 0%,#23282F 50%,#2E2519 100%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="eyebrow text-center text-cream/35">{label ?? alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ink-3 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
