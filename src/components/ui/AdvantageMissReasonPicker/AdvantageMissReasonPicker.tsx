export type AdvantageMissReason =
  | "strategy"
  | "execution"
  | "penalty"
  | "hero-shot"
  | "other";

type AdvantageMissReasonPickerProps = {
  value: AdvantageMissReason | null;
  onChange: (reason: AdvantageMissReason) => void;
};

const MISS_REASONS: ReadonlyArray<{
  label: string;
  value: AdvantageMissReason;
}> = [
  { label: "Strategy", value: "strategy" },
  { label: "Execution", value: "execution" },
  { label: "Penalty", value: "penalty" },
  { label: "Hero shot", value: "hero-shot" },
  { label: "Other", value: "other" },
];

export function AdvantageMissReasonPicker({
  value,
  onChange,
}: AdvantageMissReasonPickerProps) {
  return (
    <div role="group" aria-label="Why did you miss your Advantage Zone?">
      {MISS_REASONS.map((reason) => (
        <button
          key={reason.value}
          type="button"
          aria-pressed={value === reason.value}
          onClick={() => onChange(reason.value)}
        >
          {reason.label}
        </button>
      ))}
    </div>
  );
}