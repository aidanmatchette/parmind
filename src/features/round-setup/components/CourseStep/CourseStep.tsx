"use client";

import styles from "./CourseStep.module.css";

type CourseStepProps = {
  onBack: () => void;
};

export function CourseStep({
  onBack,
}: CourseStepProps) {
  return (
    <section className={styles.step}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Start Round</p>

        <h1 className={styles.title}>
          Select your course
        </h1>

        <p className={styles.description}>
          Search for the course you&apos;re playing today.
        </p>
      </header>

      <label className={styles.searchField}>
        <span className={styles.searchLabel}>
          Search courses
        </span>

        <input
          type="search"
          aria-label="Search courses"
          className={styles.searchInput}
          placeholder="Course name"
        />
      </label>

      <button
        type="button"
        className={styles.backButton}
        onClick={onBack}
      >
        Back
      </button>
    </section>
  );
}