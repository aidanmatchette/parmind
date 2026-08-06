export type SegmentedOption<T> = {
  label: string;
  value: T;
};

export type SegmentedControlProps<T> = {
  label: string;
  value: T | null;
  options: readonly SegmentedOption<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
};