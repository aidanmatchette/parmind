import type { SegmentedControlProps } from "./SegmentedControl.types";

export function SegmentedControl<T>({
  label,
  value,
  options,
  onChange,
}: SegmentedControlProps<T>) {
  return (
    <div role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          aria-pressed={Object.is(value, option.value)}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}