import { forwardRef, type CSSProperties } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { BANGERS } from "../../config/typography";

const button = cva(
  "nb-btn inline-flex items-center justify-center border-[#111] transition-all",
  {
    variants: {
      variant: {
        whatsapp: "bg-[#25D366] hover:bg-[#1ebe5c] text-white",
        instagram: "text-white",
        primary: "bg-[#FFC400] text-[#111]",
      },
      size: {
        sm: "text-base px-5 py-2.5 border-[3px] gap-2 nb-btn--sm",
        md: "text-xl px-9 py-4 border-4 gap-3 nb-btn--md",
        lg: "text-2xl px-10 py-5 border-4 gap-3 nb-btn--lg",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-2xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "pill",
    },
  },
);

type ButtonVariants = VariantProps<typeof button>;
type Variant = NonNullable<ButtonVariants["variant"]>;

/** Color por defecto de la sombra dura según la variante. */
const VARIANT_SHADOW: Record<Variant, string> = {
  whatsapp: "#111",
  instagram: "#B744FF",
  primary: "#111",
};

const INSTAGRAM_GRADIENT = "linear-gradient(135deg, #FF3D00, #C13584, #833AB4)";

type BaseProps = ButtonVariants & {
  /** Sobrescribe el color de la sombra dura decorativa. */
  shadowColor?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Botón neobrutalista reutilizable. Renderiza `<a>` si recibe `href`, si no `<button>`.
 * La sombra dura usa la variable CSS `--nb-shadow` para admitir color dinámico (que
 * Tailwind no puede generar como clase arbitraria). Reenvía todos los atributos HTML
 * estándar vía `...rest` (target, rel, type, onClick, aria-*, data-*, title, ...).
 */
export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size, shape, fullWidth, shadowColor, className, style, children, ...rest },
    ref,
  ) {
    const classes = button({ variant, size, shape, fullWidth, className });
    const resolvedVariant: Variant = variant ?? "primary";
    // Cast: `--nb-shadow` es una custom property CSS que este @types/react no tipa en CSSProperties.
    const mergedStyle = {
      ...BANGERS,
      ...(resolvedVariant === "instagram" ? { background: INSTAGRAM_GRADIENT } : null),
      "--nb-shadow": shadowColor ?? VARIANT_SHADOW[resolvedVariant],
      ...style,
    } as CSSProperties;

    if (rest.href !== undefined) {
      const { href, ...anchorRest } = rest as ButtonAsLink;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          style={mergedStyle}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        style={mergedStyle}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);
