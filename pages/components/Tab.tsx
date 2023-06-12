import React, { useState, useEffect } from 'react';
import AddNew from './AddNew';
import Accordion from './Accordion/Accordion';

export default function Tab() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tabName : string) => {
    setActiveTab(tabName);
  }

  const tabList = [
    {
      value: "education",
      name: "Education",
      count: 2
    },
    {
      value: "experience",
      name: "Work Experiences",
      count: 2
    },
    {
      value: "achievement",
      name: "Achievements",
      count: 1
    }
  ]

  return (
    <div className="container">
      <div className="flex flex-row justify-center gap-10 w-full border-b border-[#D9D9D9] text-[#717171]">
        {tabList.map((tab, index) => (
          <button
            className={`px-4 py-2 ${activeTab === tab.value ? "border-b-2 border-[#008392] font-bold -mb-[1px]" : ""}`}
            key={index}
            onClick={() => handleTabChange(tab.value)}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
      <div className='max-w-2xl mx-auto'>
        <AddNew />
        <Accordion activeTab={activeTab} />
      </div>
    </div>
  )
}