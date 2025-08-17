import React from "react";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";
import { useLocale } from "./hooks/use-locale";

// Extend props to accept normal Link props
export type LinkProps = RouterLinkProps;

// Locale-aware Link
export const Link: React.FC<LinkProps> = ({ to, ...props }) => {
  const { locale } = useLocale();

  const path = typeof to === "string" ? `/${locale}${to}` : to;

  return <RouterLink to={path} {...props} />;
};
