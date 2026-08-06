"use client";

import { useState } from "react";
import { AdvantagePicker } from "@/components/ui/AdvantagePicker";
import { PenaltyPicker } from "@/components/ui/PenaltyPicker";
import { PuttPicker } from "@/components/ui/PuttPicker";
import { ScorePicker } from "@/components/ui/ScorePicker";
import type { HoleCardProps } from "./HoleCard.types";

export function HoleCard({
  holeNumber,
  par,
  onSave,
}: HoleCardProps) {
  const [score, setScore] = useState(par);
  const [putts, setPutts] = useState(2);
  const [penalties, setPenalties] = useState(0);
  const [reachedAdvantageZone, setReachedAdvantageZone] =
    useState<boolean | null>(null);

  const handleSave = () => {
    if (reachedAdvantageZone === null) {
      return;
    }

    onSave({
      holeNumber,
      par,
      score,
      putts,
      penalties,
      reachedAdvantageZone,
      advantageMissReason: null,
    });
  };

  return (
    <section aria-labelledby={`hole-${holeNumber}-title`}>
      <h2 id={`hole-${holeNumber}-title`}>
        Hole {holeNumber}
      </h2>

      <p>Par {par}</p>

      <ScorePicker
        value={score}
        min={1}
        max={9}
        onChange={setScore}
      />

      <PuttPicker
        value={putts}
        onChange={setPutts}
      />

      <PenaltyPicker
        value={penalties}
        onChange={setPenalties}
      />

      <AdvantagePicker
        value={reachedAdvantageZone}
        onChange={setReachedAdvantageZone}
      />

      <button
        type="button"
        disabled={reachedAdvantageZone === null}
        onClick={handleSave}
      >
        Save hole
      </button>
    </section>
  );
}