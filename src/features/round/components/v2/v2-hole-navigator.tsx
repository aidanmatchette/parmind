"use client";

import { cn } from "@/lib/utils";
import { holeDecisionWins } from "@/domain/round/round-scoring";
import { useRoundStore } from "../../store/round-store";

export function V2HoleNavigator() {
  const { round, activeHole, setActiveHole } = useRoundStore();

  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
      {round.holes.map((hole) => {
        const started = hole.strokes > 0 || holeDecisionWins(hole) > 0 || hole.penalties > 0 || hole.heroAttempt;
        const active = hole.holeNumber === activeHole;

        return (
          <button
            key={hole.holeNumber}
            onClick={() => setActiveHole(hole.holeNumber)}
            className={cn(
              "grid h-14 min-w-14 place-items-center rounded-[1.15rem] border text-sm font-black shadow-pmSoft transition active:scale-95",
              active && "border-pm-ink bg-pm-ink text-white",
              !active && started && "border-pm-green/20 bg-pm-green/10 text-pm-green",
              !active && !started && "border-pm-hairline bg-white text-pm-ink"
            )}
          >
            {hole.holeNumber}
          </button>
        );
      })}
    </div>
  );
}
