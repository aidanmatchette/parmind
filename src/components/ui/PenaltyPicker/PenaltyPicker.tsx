type PenaltyPickerProps = {
  value: number;
  onChange: (penalties: number) => void;
};

const PENALTY_OPTIONS = [0, 1, 2, 3] as const;

export function PenaltyPicker({
  value,
  onChange,
}: PenaltyPickerProps) {
  return (
    <div role="group" aria-label="Select penalties">
      {PENALTY_OPTIONS.map((penalties) => (
        <button
          key={penalties}
          type="button"
          aria-pressed={penalties === value}
          onClick={() => onChange(penalties)}
        >
          {penalties}
        </button>
      ))}
    </div>
  );
}