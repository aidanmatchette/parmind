"use client";

import { useEffect, useMemo, useState } from "react";
import { useRoundStore } from "../store/round-store";
import { exportRoundToCsv } from "../services/export-round";
import { RoundHero } from "./v2/round-hero";
import { V2HoleNavigator } from "./v2/v2-hole-navigator";
import { V2HoleCard } from "./v2/v2-hole-card";
import { V2RoundSetup } from "./v2/v2-round-setup";
import { V2Debrief } from "./v2/v2-debrief";
import { BottomNav, type MainView } from "@/ui/v2/bottom-nav";

export function AppShell() {
  const [view, setView] = useState<MainView>("round");
  const { round, totals, hydrate, resetRound, hydrated } = useRoundStore();

  useEffect(() => {
    hydrate();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }
  }, [hydrate]);

  const gradeLabel = useMemo(() => {
    if (totals.grade === "A") return "Tournament clean";
    if (totals.grade === "B") return "Solid round";
    if (totals.grade === "C") return "Decision leaks";
    return "Strategy reset";
  }, [totals.grade]);

  if (!hydrated) {
    return (
      <main className="grid min-h-screen place-items-center px-6">
        <div className="text-center">
          <div className="text-4xl font-black tracking-tight">ParMind</div>
          <p className="mt-2 text-sm text-pm-muted">Loading your round…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-xl px-4 pb-[calc(var(--safe-bottom)+96px)] pt-[calc(var(--safe-top)+14px)]">
      <RoundHero totals={totals} gradeLabel={gradeLabel} />

      {view === "round" ? (
        <div className="space-y-4">
          <V2RoundSetup />
          <V2HoleNavigator />
          <V2HoleCard />
        </div>
      ) : (
        <V2Debrief />
      )}

      <BottomNav
        view={view}
        onViewChange={setView}
        onExport={() => exportRoundToCsv(round, totals)}
        onReset={() => {
          if (confirm("Reset the active round?")) resetRound();
        }}
      />
    </main>
  );
}
