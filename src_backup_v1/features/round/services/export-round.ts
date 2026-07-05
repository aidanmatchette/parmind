import type { Round, RoundTotals } from "@/domain/round/types";

export function exportRoundToCsv(round: Round, totals: RoundTotals) {
  const rows = [
    ["Hole", "Par", "Score", "Putts", "Penalties", "Plan", "Decision", "Commit", "Emotion", "Hero", "Note"],
    ...round.holes.map((hole) => [
      hole.holeNumber,
      hole.par,
      hole.strokes,
      hole.putts,
      hole.penalties,
      yesNo(hole.plan),
      yesNo(hole.decision),
      yesNo(hole.commit),
      yesNo(hole.emotion),
      yesNo(hole.heroAttempt),
      hole.note,
    ]),
    [],
    ["Gross", totals.gross],
    ["Putts", totals.putts],
    ["Penalties", totals.penalties],
    ["Hero Attempts", totals.heroAttempts],
    ["Decision Score", `${totals.decisionWins}/${totals.decisionPossible}`],
    ["Grade", totals.grade],
    [],
    ["Best Decision", round.reflection.bestDecision],
    ["Costliest Decision", round.reflection.costliestDecision],
    ["Next Round Commitment", round.reflection.nextRoundCommitment],
  ];

  const csv = rows.map((row) => row.map(formatCsvCell).join(",")).join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `parmind-${round.date}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  URL.revokeObjectURL(url);
}

function yesNo(value: boolean) {
  return value ? "Yes" : "No";
}

function formatCsvCell(value: unknown) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}