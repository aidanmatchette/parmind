import { SegmentedControl } from "../primitives/SegmentedControl";

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
  const options = Array.from(
    { length: max - min + 1 },
    (_, index) => {
      const score = min + index;

      return {
        label: String(score),
        value: score,
      };
    },
  );

  return (
    <SegmentedControl
      label="Select score"
      value={value}
      options={options}
      onChange={onChange}
    />
  );
}