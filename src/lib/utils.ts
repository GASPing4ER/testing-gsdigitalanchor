import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// TypeScript type for the fbq function
type FbqEvent = "track" | "trackCustom" | "init";

type FbqArgs =
  | [FbqEvent, string, Record<string, any>?]
  | [FbqEvent, string]
  | [FbqEvent];

export const fbq = (...args: FbqArgs): void => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
};
