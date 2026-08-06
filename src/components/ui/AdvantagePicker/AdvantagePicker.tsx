type AdvantagePickerProps = {
  value: boolean | null;
  onChange: (reachedAdvantageZone: boolean) => void;
};

const ADVANTAGE_OPTIONS = [
  { label: "Yes", value: true },
  { label: "No", value: false },
] as const;

export function AdvantagePicker({
  value,
  onChange,
}: AdvantagePickerProps) {
  return (
    <div role="group" aria-label="Did you reach your Advantage Zone?">
      {ADVANTAGE_OPTIONS.map((option) => (
        <button
          key={option.label}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}