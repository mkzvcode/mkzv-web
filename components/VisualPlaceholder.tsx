import type { CSSProperties } from "react";

type VisualVariant = "screen" | "mobile" | "wave" | "route" | "poster" | "system";

type VisualPlaceholderProps = {
  label: string;
  title: string;
  variant?: VisualVariant;
};

const waveBars = Array.from({ length: 28 }, (_, index) => index);
const routeDots = ["Оффер", "Доверие", "Кейсы", "Заявка"];
const systemCells = ["UX", "UI", "API", "SEO", "FORM", "DEPLOY"];

export function VisualPlaceholder({ label, title, variant = "screen" }: VisualPlaceholderProps) {
  return (
    <div aria-label={label} className={`visual-card visual-${variant}`} role="img">
      <div className="visual-meta mono">
        <span>{label}</span>
        <span>MKZV / placeholder</span>
      </div>

      {variant === "screen" ? (
        <div className="visual-window">
          <div className="visual-window-top" />
          <div className="visual-window-grid">
            <span className="visual-window-hero" />
            <span />
            <span />
            <span />
          </div>
          <div className="visual-window-footer">
            <span />
            <span />
          </div>
        </div>
      ) : null}

      {variant === "mobile" ? (
        <div className="visual-device">
          <span className="visual-device-orb" />
          <span />
          <span />
          <span />
        </div>
      ) : null}

      {variant === "wave" ? (
        <div className="visual-waveform">
          {waveBars.map((bar) => (
            <span key={bar} style={{ "--bar": `${18 + ((bar * 17) % 64)}%` } as CSSProperties} />
          ))}
        </div>
      ) : null}

      {variant === "route" ? (
        <div className="visual-route-map">
          {routeDots.map((dot, index) => (
            <span className="mono" key={dot}>
              <i>{`0${index + 1}`}</i>
              {dot}
            </span>
          ))}
        </div>
      ) : null}

      {variant === "poster" ? (
        <div className="visual-poster-mark">
          <span />
        </div>
      ) : null}

      {variant === "system" ? (
        <div className="visual-system-grid">
          {systemCells.map((cell) => (
            <span className="mono" key={cell}>
              {cell}
            </span>
          ))}
        </div>
      ) : null}

      <p className="visual-title display">{title}</p>
    </div>
  );
}
