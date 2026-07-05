"use client";

import type { RoundTotals } from "@/domain/round/types";
import { MetricTile } from "@/ui/v2/metric-tile";

export function RoundHero({ totals, gradeLabel }: { totals: RoundTotals; gradeLabel: string }) {
  return (
    <header className="mb-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-black uppercase tracking-[0.28em] text-pm-gold">ParMind</div>
          <h1 className="mt-1 text-hero font-black">Think better.<br />Score lower.</h1>
        </div>

        <div className="grid h-24 w-24 place-items-center rounded-[2rem] bg-pm-ink text-white shadow-pm">
          <div className="text-center">
            <div className="text-5xl font-black leading-none">{totals.grade}</div>
            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">Grade</div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm font-semibold text-pm-muted">{gradeLabel}. Track decisions, not perfection.</p>

      <div className="mt-4 grid grid-cols-4 gap-2">
        <MetricTile label="Gross" value={totals.gross || "—"} />
        <MetricTile label="Decision" value={`${totals.decisionWins}`} accent="gold" />
        <MetricTile label="Penalty" value={totals.penalties} accent={totals.penalties > 0 ? "red" : "green"} />
        <MetricTile label="Hero" value={totals.heroAttempts} accent={totals.heroAttempts > 0 ? "red" : "green"} />
      </div>
    </header>
  );
}
