// components/StepCard.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface StepCardProps {
  number: number | string;
  title: string;
  text: string | ReactNode;
  className?: string;
}

export function StepCard({
  number,
  title,
  text,
  className = "",
}: StepCardProps) {
  return (
    <div
      className={cn(
        `
      relative flex flex-col
      rounded-2xl
      border border-border
      bg-card
      p-6 md:p-8
      h-full w-full
      text-center
      transition-all duration-300
      hover:shadow-md
    `,
        className,
      )}
    >
      {/* Número */}
      <div
        className="
      absolute -top-6 left-1/2 -translate-x-1/2
      flex h-12 w-12 items-center justify-center
      rounded-full
      bg-primary text-primary-foreground
      text-lg font-bold
      ring-4 ring-background
      shadow-sm
    "
      >
        {number}
      </div>

      {/* Contenido */}
      <div className="mt-8 flex flex-col gap-3">
        <h3
          className={cn(
            "text-xl md:text-2xl font-semibold tracking-tight text-foreground",
          )}
        >
          {title}
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  );
}
