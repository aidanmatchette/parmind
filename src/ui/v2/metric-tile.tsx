import { cn } from "@/lib/utils";

export function MetricTile({
  label,
  value,
  accent,
  className
}: {
  label: string;
  value: string | number;
  accent?: "gold" | "green" | "red";
  className?: string;
}) {
  const accentClass =
    accent === "gold" ? "text-pm-gold" : accent === "green" ? "text-pm-green" : accent === "red" ? "text-pm-red" : "text-pm-ink";

  return (
    <div className={cn("rounded-pmSm border border-pm-hairline bg-white px-4 py-3 shadow-pmSoft", className)}>
      <div className={cn("text-2xl font-black tracking-tight", accentClass)}>{value}</div>
      <div className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-pm-muted">{label}</div>
    </div>
  );
}
