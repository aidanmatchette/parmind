import { BarChart3, Flag, RotateCcw, Share } from "lucide-react";
import { PMButton } from "./pm-button";

export type MainView = "round" | "debrief";

export function BottomNav({
  view,
  onViewChange,
  onExport,
  onReset
}: {
  view: MainView;
  onViewChange: (view: MainView) => void;
  onExport: () => void;
  onReset: () => void;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-pm-bg/88 px-4 pb-[calc(var(--safe-bottom)+12px)] pt-3 backdrop-blur-xl">
      <div className="mx-auto grid max-w-xl grid-cols-4 gap-2">
        <PMButton variant={view === "round" ? "primary" : "secondary"} className="min-h-12 px-2 text-xs" onClick={() => onViewChange("round")}>
          <Flag className="h-4 w-4" />
          Round
        </PMButton>
        <PMButton variant={view === "debrief" ? "primary" : "secondary"} className="min-h-12 px-2 text-xs" onClick={() => onViewChange("debrief")}>
          <BarChart3 className="h-4 w-4" />
          Debrief
        </PMButton>
        <PMButton variant="secondary" className="min-h-12 px-2 text-xs" onClick={onExport}>
          <Share className="h-4 w-4" />
          Export
        </PMButton>
        <PMButton variant="danger" className="min-h-12 px-2 text-xs" onClick={onReset}>
          <RotateCcw className="h-4 w-4" />
          Reset
        </PMButton>
      </div>
    </nav>
  );
}
