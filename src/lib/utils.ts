import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export { cn };

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
