import React, { useState, useContext } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionData, DetailsEducation, DetailsExperience, DetailsAchievement, ResumeContext } from "@/pages";

export interface ActiveTabProps {
  activeTab: string;
}

export default function Accordion({ activeTab }: ActiveTabProps) {
  const [accordionData] = useState<AccordionData>(useContext(ResumeContext)[0]);

  if (!accordionData) {
    return null;
  }

  const activeTabData = accordionData[activeTab as keyof AccordionData];

  if (!activeTabData || !Array.isArray(activeTabData)) {
    return null;
  }

  return (
    <div className="mt-4">
      {activeTabData.map((data, index) => {
        let details: DetailsEducation | DetailsExperience | DetailsAchievement | null = null;

        if (activeTab === "education") {
          details = data.details as DetailsEducation;
        } else if (activeTab === "experience") {
          details = data.details as DetailsExperience;
        } else if (activeTab === "achievement") {
          details = data.details as DetailsAchievement;
        }

        return (
          <AccordionItem
            key={index}
            summary={data.summary}
            details={details}
            isOpen={data.isOpen}
            activeTab={activeTab}
          />
        );
      })}
    </div>
  );
}