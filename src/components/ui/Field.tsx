import { forwardRef } from "react";

import { NUNITO } from "../../config/typography";

const CONTROL_CLASS =
  "w-full bg-[#111] border-2 border-[#444] rounded-xl px-4 py-3 text-white placeholder-white/25 font-semibold focus:border-[#FFC400] focus:outline-none transition-colors";
const LABEL_CLASS = "block text-white font-black mb-2 text-xs uppercase tracking-widest";

type CommonProps = {
  id: string;
  label: string;
  /** Clases extra para el contenedor del campo (p. ej. `mb-7`). */
  className?: string;
};

type InputFieldProps = CommonProps & { as?: "input" } & Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "id" | "className"
  >;
type TextareaFieldProps = CommonProps & { as: "textarea" } & Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "id" | "className"
  >;
type SelectFieldProps = CommonProps & { as: "select" } & Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "id" | "className"
  >;

export type FieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

/**
 * Campo de formulario: etiqueta + control con el id/htmlFor ya cableados (a11y).
 * `as` elige el control nativo (`input` por defecto, `textarea` o `select`).
 * Reenvía `...rest` al control y expone su ref. Sin estados de error/helper
 * todavía: se añadirán cuando el formulario los necesite (no premature variants).
 */
export const Field = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FieldProps
>(function Field({ id, label, className, ...rest }, ref) {
  let control: React.ReactNode;

  if (rest.as === "textarea") {
    const { as: _as, ...props } = rest;
    control = (
      <textarea
        {...props}
        id={id}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        className={`${CONTROL_CLASS} resize-none`}
        style={NUNITO}
      />
    );
  } else if (rest.as === "select") {
    const { as: _as, ...props } = rest;
    control = (
      <select
        {...props}
        id={id}
        ref={ref as React.Ref<HTMLSelectElement>}
        className={CONTROL_CLASS}
        style={NUNITO}
      />
    );
  } else {
    const { as: _as, ...props } = rest;
    control = (
      <input
        {...props}
        id={id}
        ref={ref as React.Ref<HTMLInputElement>}
        className={CONTROL_CLASS}
        style={NUNITO}
      />
    );
  }

  return (
    <div className={className}>
      <label htmlFor={id} className={LABEL_CLASS} style={NUNITO}>
        {label}
      </label>
      {control}
    </div>
  );
});
