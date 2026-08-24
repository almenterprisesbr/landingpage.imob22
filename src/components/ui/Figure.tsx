import { useState } from "react";

/**
 * Imagem com degradê de reserva.
 * Enquanto as fotos oficiais do prédio não chegam, o lugar da imagem
 * continua com aparência acabada em vez de quebrar o layout.
 */
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
      <div
        className={`relative grain overflow-hidden bg-ink-3 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #131B2B 0%, #1B2436 45%, #2A2418 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="text-center font-display text-[0.6rem] uppercase tracking-label text-sand/35">
            {label ?? alt}
          </span>
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
