"use client";

import { AppCard } from "@/ui/v2/app-card";
import { useRoundStore } from "../../store/round-store";

export function V2RoundSetup() {
  const { round, updateRoundMeta } = useRoundStore();

  return (
    <AppCard className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-sm font-black">Today's Round</div>
          <div className="text-xs font-semibold text-pm-muted">Local-first. Offline-ready.</div>
        </div>
        <div className="rounded-full bg-pm-sand px-3 py-1 text-xs font-black text-pm-ink">Target {round.targetScore}</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Player">
          <input value={round.player} onChange={(e) => updateRoundMeta({ player: e.target.value })} />
        </Field>
        <Field label="Date">
          <input type="date" value={round.date} onChange={(e) => updateRoundMeta({ date: e.target.value })} />
        </Field>
        <Field label="Course">
          <input value={round.course} onChange={(e) => updateRoundMeta({ course: e.target.value })} />
        </Field>
        <Field label="Target">
          <input inputMode="numeric" value={round.targetScore} onChange={(e) => updateRoundMeta({ targetScore: Number(e.target.value || 0) })} />
        </Field>
      </div>
    </AppCard>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label>
      <div className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-pm-muted">{label}</div>
      <div className="[&_input]:h-12 [&_input]:w-full [&_input]:rounded-2xl [&_input]:border [&_input]:border-pm-hairline [&_input]:bg-pm-bg [&_input]:px-3 [&_input]:text-sm [&_input]:font-bold [&_input]:outline-none [&_input:focus]:ring-2 [&_input:focus]:ring-pm-gold/30">
        {children}
      </div>
    </label>
  );
}
