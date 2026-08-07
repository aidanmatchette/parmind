"use client";

import { useState } from "react";
import {
  recordHoleResult,
  type HoleResult,
  type Round,
} from "@/domain/round";
import { HoleCard } from "../HoleCard";

type RoundPageProps = {
  initialHoleNumber?: number;
};

const DEFAULT_PAR = 4;

export function RoundPage({
  initialHoleNumber = 1,
}: RoundPageProps) {
  const [round, setRound] = useState<Round>({
    id: "round-1",
    courseName: null,
    teeName: null,
    currentHoleNumber: initialHoleNumber,
    holes: [],
  });

  const handleSaveHole = (result: HoleResult) => {
    setRound((currentRound) =>
      recordHoleResult(currentRound, result),
    );
  };

  const recordedHoleLabel =
    round.holes.length === 1
      ? "1 hole recorded"
      : `${round.holes.length} holes recorded`;

  const isRoundComplete =
    round.currentHoleNumber === 18 &&
    round.holes.some((hole) => hole.holeNumber === 18);

  if (isRoundComplete) {
    return (
      <main>
        <h1>Round complete</h1>
        <p>{recordedHoleLabel}</p>
      </main>
    );
  }

  return (
    <main>
      <p>{recordedHoleLabel}</p>

      <HoleCard
        key={round.currentHoleNumber}
        holeNumber={round.currentHoleNumber}
        par={DEFAULT_PAR}
        onSave={handleSaveHole}
      />
    </main>
  );
}