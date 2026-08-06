type PuttPickerProps = {
  value: number;
  onChange: (putts: number) => void;
};

const PUTT_OPTIONS = [0, 1, 2, 3, 4] as const;

export function PuttPicker({
  value,
  onChange,
}: PuttPickerProps) {
  return (
    <div role="group" aria-label="Select putts">
      {PUTT_OPTIONS.map((putts) => (
        <button
          key={putts}
          type="button"
          aria-pressed={putts === value}
          onClick={() => onChange(putts)}
        >
          {putts}
        </button>
      ))}
    </div>
  );
}