"use client";

import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { useRoundStore } from "../../store/round-store";
import { AppCard } from "@/ui/v2/app-card";
import { PMButton } from "@/ui/v2/pm-button";
import { V2DecisionChip } from "./v2-decision-chip";
import { clamp } from "@/lib/utils";

export function V2HoleCard() {
  const { round, activeHole, setActiveHole, adjustHoleNumber, updateHoleNote } = useRoundStore();
  const hole = round.holes[activeHole - 1];
  const relationToPar = hole.strokes > 0 ? hole.strokes - hole.par : 0;
  const scoreLabel = hole.strokes === 0 ? "—" : relationToPar === 0 ? "E" : relationToPar > 0 ? `+${relationToPar}` : String(relationToPar);

  return (
    <AppCard className="overflow-hidden">
      <div className="border-b border-pm-hairline bg-gradient-to-br from-white to-pm-bg p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.24em] text-pm-gold">Hole {hole.holeNumber}</div>
            <div className="mt-1 text-4xl font-black tracking-tight">Par {hole.par}</div>
            <div className="mt-1 text-sm font-semibold text-pm-muted">Win the hole before you swing.</div>
          </div>

          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.24em] text-pm-muted">To Par</div>
            <div className="text-display font-black">{scoreLabel}</div>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="grid grid-cols-3 gap-3">
          <NumberControl label="Score" value={hole.strokes} onMinus={() => adjustHoleNumber("strokes", -1)} onPlus={() => adjustHoleNumber("strokes", 1)} large />
          <NumberControl label="Putts" value={hole.putts} onMinus={() => adjustHoleNumber("putts", -1)} onPlus={() => adjustHoleNumber("putts", 1)} />
          <NumberControl label="Penalty" value={hole.penalties} onMinus={() => adjustHoleNumber("penalties", -1)} onPlus={() => adjustHoleNumber("penalties", 1)} danger={hole.penalties > 0} />
        </div>

        <div>
          <div className="mb-2 text-[10px] font-black uppercase tracking-[0.20em] text-pm-muted">The Four Wins</div>
          <div className="grid grid-cols-2 gap-2">
            <V2DecisionChip decisionKey="plan" title="Think" description="Strategy, club, target." />
            <V2DecisionChip decisionKey="decision" title="Decide" description="Highest-percentage play." />
            <V2DecisionChip decisionKey="commit" title="Commit" description="Full routine, no steering." />
            <V2DecisionChip decisionKey="emotion" title="Respond" description="Accept and reset." />
          </div>
        </div>

        <V2DecisionChip decisionKey="heroAttempt" title="Hero Shot Attempted" description="Low-percentage recovery or ego play." danger full />

        <label className="block">
          <div className="mb-2 text-[10px] font-black uppercase tracking-[0.20em] text-pm-muted">Quick note</div>
          <textarea
            value={hole.note}
            onChange={(e) => updateHoleNote(e.target.value)}
            placeholder="Example: 4i fairway. Middle green. Stress-free par."
            className="min-h-24 w-full rounded-pmSm border border-pm-hairline bg-pm-bg p-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-pm-gold/30"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <PMButton variant="secondary" onClick={() => setActiveHole(clamp(activeHole - 1, 1, 18))}>
            <ChevronLeft className="h-4 w-4" /> Previous
          </PMButton>
          <PMButton onClick={() => setActiveHole(clamp(activeHole + 1, 1, 18))}>
            Next <ChevronRight className="h-4 w-4" />
          </PMButton>
        </div>
      </div>
    </AppCard>
  );
}

function NumberControl({
  label,
  value,
  onMinus,
  onPlus,
  large,
  danger
}: {
  label: string;
  value: number;
  onMinus: () => void;
  onPlus: () => void;
  large?: boolean;
  danger?: boolean;
}) {
  return (
    <div className={`rounded-pmSm border ${danger ? "border-red-100 bg-red-50" : "border-pm-hairline bg-pm-bg"} p-3 text-center`}>
      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-pm-muted">{label}</div>
      <div className="mt-2 flex items-center justify-between gap-1">
        <button onClick={onMinus} className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-pmSoft active:scale-95">
          <Minus className="h-4 w-4" />
        </button>
        <div className={`${large ? "text-4xl" : "text-3xl"} min-w-10 font-black tracking-tight`}>{value || "—"}</div>
        <button onClick={onPlus} className="grid h-10 w-10 place-items-center rounded-full bg-pm-ink text-white shadow-pmSoft active:scale-95">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
