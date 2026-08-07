"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import type { RoundFormat } from "@/domain/round";
import { CourseStep } from "../CourseStep";
import { RoundFormatStep } from "../RoundFormatStep";

type SetupStep = "format" | "course";

export function RoundSetupFlow() {
  const [step, setStep] = useState<SetupStep>("format");
  const [format, setFormat] =
    useState<RoundFormat>("18-holes");

  if (step === "course") {
    return (
      <AppShell>
        <CourseStep
          onBack={() => setStep("format")}
        />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <RoundFormatStep
        value={format}
        onChange={setFormat}
        onContinue={() => setStep("course")}
      />
    </AppShell>
  );
}