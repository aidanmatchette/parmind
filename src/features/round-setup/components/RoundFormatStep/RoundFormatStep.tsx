"use client";

import type { RoundFormat } from "@/domain/round";
import { Button } from "@/components/ui/primitives/Button";
import { SegmentedControl } from "@/components/ui/primitives/SegmentedControl";
import styles from "./RoundFormatStep.module.css";

type RoundFormatStepProps = {
  value: RoundFormat;
  onChange: (format: RoundFormat) => void;
  onContinue: () => void;
};

const ROUND_FORMAT_OPTIONS = [
  { label: "18 Holes", value: "18-holes" },
  { label: "Front 9", value: "front-9" },
  { label: "Back 9", value: "back-9" },
] satisfies {
  label: string;
  value: RoundFormat;
}[];

export function RoundFormatStep({
  value,
  onChange,
  onContinue,
}: RoundFormatStepProps) {
  return (
    <section className={styles.step}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Start Round</p>
        <h1 className={styles.title}>How many holes?</h1>
        <p className={styles.description}>
          Choose the part of the course you&apos;re playing today.
        </p>
      </header>

      <SegmentedControl
        label="Round format"
        value={value}
        options={ROUND_FORMAT_OPTIONS}
        onChange={onChange}
      />

      <Button onClick={onContinue}>
        Continue
      </Button>
    </section>
  );
}