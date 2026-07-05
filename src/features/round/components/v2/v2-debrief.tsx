"use client";

import { Award, Save } from "lucide-react";
import { AppCard } from "@/ui/v2/app-card";
import { MetricTile } from "@/ui/v2/metric-tile";
import { PMButton } from "@/ui/v2/pm-button";
import { useRoundStore } from "../../store/round-store";

export function V2Debrief() {
  const { round, totals, updateReflection, archiveRound } = useRoundStore();

  return (
    <section className="space-y-4">
      <AppCard className="p-5">
        <div className="flex items-center gap-3">
          <div className="grid h-16 w-16 place-items-center rounded-[1.35rem] bg-pm-ink text-white">
            <Award className="h-8 w-8" />
          </div>
          <div>
            <div className="text-3xl font-black tracking-tight">Debrief</div>
            <div className="text-sm font-semibold text-pm-muted">The score is data. The lesson is the value.</div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <MetricTile label="Decision" value={`${totals.decisionWins}/${totals.decisionPossible}`} accent="gold" />
          <MetricTile label="Grade" value={totals.grade} />
          <MetricTile label="Doubles+" value={totals.doublesOrWorseEstimate} accent={totals.doublesOrWorseEstimate ? "red" : "green"} />
          <MetricTile label="Hero" value={totals.heroAttempts} accent={totals.heroAttempts ? "red" : "green"} />
        </div>
      </AppCard>

      <Reflection label="What decision saved the most shots?" value={round.reflection.bestDecision} onChange={(v) => updateReflection("bestDecision", v)} />
      <Reflection label="What decision cost the most shots?" value={round.reflection.costliestDecision} onChange={(v) => updateReflection("costliestDecision", v)} />
      <Reflection label="One commitment for the next round" value={round.reflection.nextRoundCommitment} onChange={(v) => updateReflection("nextRoundCommitment", v)} />

      <PMButton className="w-full" onClick={() => {
        archiveRound();
        alert("Round archived locally.");
      }}>
        <Save className="h-4 w-4" />
        Archive Round
      </PMButton>
    </section>
  );
}

function Reflection({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <AppCard className="p-4">
      <label>
        <div className="mb-2 text-[10px] font-black uppercase tracking-[0.20em] text-pm-muted">{label}</div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-28 w-full rounded-pmSm border border-pm-hairline bg-pm-bg p-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-pm-gold/30"
        />
      </label>
    </AppCard>
  );
}
