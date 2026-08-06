"use client";

import { useState } from "react";
import {
  recordHoleResult,
  type HoleResult,
  type Round,
} from "@/domain/round";
import { HoleCard } from "../HoleCard";

const INITIAL_ROUND: Round = {
  id: "round-1",
  courseName: null,
  teeName: null,
  currentHoleNumber: 1,
  holes: [],
};

const DEFAULT_PAR = 4;

export function RoundPage() {
  const [round, setRound] = useState<Round>(INITIAL_ROUND);

  const handleSaveHole = (result: HoleResult) => {
    setRound((currentRound) =>
      recordHoleResult(currentRound, result),
    );
  };

  const recordedHoleLabel =
    round.holes.length === 1
      ? "1 hole recorded"
      : `${round.holes.length} holes recorded`;

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