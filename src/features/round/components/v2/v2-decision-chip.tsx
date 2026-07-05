"use client";

import { Check, X } from "lucide-react";
import type { DecisionKey } from "@/domain/round/types";
import { cn } from "@/lib/utils";
import { useRoundStore } from "../../store/round-store";

export function V2DecisionChip({
  decisionKey,
  title,
  description,
  danger,
  full
}: {
  decisionKey: DecisionKey | "heroAttempt";
  title: string;
  description: string;
  danger?: boolean;
  full?: boolean;
}) {
  const { round, activeHole, toggleDecision } = useRoundStore();
  const hole = round.holes[activeHole - 1];
  const active = Boolean(hole[decisionKey]);

  return (
    <button
      onClick={() => toggleDecision(decisionKey)}
      className={cn(
        "relative min-h-24 rounded-pmSm border p-4 text-left transition active:scale-[0.98]",
        full && "w-full",
        active && !danger && "border-pm-green/30 bg-pm-green/10",
        active && danger && "border-pm-red/25 bg-red-50",
        !active && "border-pm-hairline bg-white"
      )}
    >
      <div
        className={cn(
          "absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full",
          active && !danger && "bg-pm-green text-white",
          active && danger && "bg-pm-red text-white",
          !active && "bg-pm-bg text-pm-muted"
        )}
      >
        {active ? danger ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" /> : null}
      </div>
      <div className="pr-9 text-base font-black">{title}</div>
      <div className="mt-1 max-w-[13rem] text-xs font-semibold leading-4 text-pm-muted">{description}</div>
    </button>
  );
}
