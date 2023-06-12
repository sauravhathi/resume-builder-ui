import Header from './components/Header'
import PersonalDetails from './components/PersonalDetails'
import Tab from './components/Tab'
import React, { createContext, useContext, useState } from 'react'

export interface DetailsEducation {
  degree?: string;
  duration?: string;
  description?: string;
}

export interface DetailsExperience {
  company?: string;
  role?: string;
  duration?: string;
  description?: string;
}

export interface DetailsAchievement {
  duration?: string;
  description?: string;
}

export interface AccordionData {
  education: {
    summary: string;
    details: DetailsEducation | null;
    isOpen: boolean;
  }[];
  experience: {
    summary: string;
    details: DetailsExperience | null;
    isOpen: boolean;
  }[];
  achievement: {
    summary: string;
    details: DetailsAchievement | null;
    isOpen: boolean;
  }[];
}

export const accordionData: AccordionData = {
  education: [
    {
      summary: "Acme Institute of Technology, Udaipur",
      details: {
        degree: "Bachelor of Engineering in Computer Science",
        duration: "May 2014 - Feb 2017",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
      },
      isOpen: false,
    },
    {
      summary: "Arkham Institute of Technology, Bangalore",
      details: {
        degree: "Bachelor of Engineering in Computer Science",
        duration: "May 2014 - Feb 2017",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
      },
      isOpen: false,
    },
    {
      summary: "Arkham Institute of Technology, Jharkhand",
      details: {
        degree: "Bachelor of Engineering in Computer Science",
        duration: "May 2014 - Feb 2017",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
      },
      isOpen: true,
    },
  ],
  experience: [
    {
      summary: "Stark Weapons and Technologies, Bangalore",
      details: {
        role: "Tech Lead",
        duration: "May 2014 - Feb 2017",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
      },
      isOpen: true,
    },
    {
      summary: "Wayne Enterprises, Bangalore",
      details: {
        role: "Tech Lead",
        duration: "May 2014 - Feb 2017",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      },
      isOpen: false,
    },
  ],
  achievement: [
    {
      summary: "Created Spiderman suite",
      details: {
        duration: "May 2014 - Feb 2017",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      },
      isOpen: true,
    },
    {
      summary: "Created Ironman suite",
      details: {
        duration: "May 2014 - Feb 2017",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      },
      isOpen: false,
    },
  ],
};

type ResumeContextType = [
  AccordionData,
  React.Dispatch<React.SetStateAction<AccordionData>>
];

export const ResumeContext = createContext<ResumeContextType>([
  accordionData,
  () => {},
]);

export default function ResumeBuilder() {

  const [accordionData, setAccordionData] = useState<AccordionData>(useContext(ResumeContext)[0]);

  return (
    <ResumeContext.Provider value={[accordionData, setAccordionData]} >
      <Header />
      <main>
        <PersonalDetails />
        <Tab />
      </main>
    </ResumeContext.Provider>
  )
}