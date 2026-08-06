type ScorePickerProps = {
  value: number;
  min: number;
  max: number;
  onChange: (score: number) => void;
};

export function ScorePicker({
  value,
  min,
  max,
  onChange,
}: ScorePickerProps) {
  const scores = Array.from(
    { length: max - min + 1 },
    (_, index) => min + index,
  );

  return (
    <div role="group" aria-label="Select score">
      {scores.map((score) => (
        <button
          key={score}
          type="button"
          aria-pressed={score === value}
          onClick={() => onChange(score)}
        >
          {score}
        </button>
      ))}
    </div>
  );
}