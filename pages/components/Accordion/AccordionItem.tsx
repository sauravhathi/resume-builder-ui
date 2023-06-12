import React, { useState } from 'react';
import Model from '../Model';
import { DetailsEducation, DetailsExperience, DetailsAchievement } from '@/pages';

export interface AccordionItemProps {
  summary: string;
  details: DetailsEducation | DetailsExperience | DetailsAchievement | null;
  isOpen: boolean;
  activeTab: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ summary, details, isOpen, activeTab }) => {

  const [isModelOpen, setModelOpen] = useState(false);

  const handleEditClick = () => {
    console.log("edit clicked");
    setModelOpen(true);
  };

  const handleCloseModel = () => {
    console.log("close clicked");
    setModelOpen(false);
  };

  const handleDeleteClick = () => {
    console.log("delete clicked");
  };

  return (
    <div className="border border-[#EBEBEB] rounded-md mb-4">
      <details open={isOpen}>
        <summary className="px-4 py-4 border-b border-[#EBEBEB] flex justify-between items-center">
          <h2 className="text-[#222222] font-semibold">{summary}</h2>
          <span className="text-[#717171]">
            {activeTab === 'education' && (details as DetailsEducation).duration}
            {activeTab === 'experience' && (details as DetailsExperience).duration}
            {activeTab === 'achievement' && (details as DetailsAchievement).duration}
          </span>
        </summary>
        <div className="px-4 py-2 flex flex-col gap-7">
          {activeTab === 'education' && (details as DetailsEducation)?.degree && (
            <div>
              <h2 className="text-[#222222] font-semibold mb-4">Degree</h2>
              <span className="text-[#222222] font-bold">{(details as DetailsEducation).degree}</span>
            </div>
          )}
          {activeTab === 'experience' && (details as DetailsExperience)?.role && (
            <div>
              <h2 className="text-[#222222] font-semibold mb-4">Role</h2>
              <span className="text-[#222222] font-bold">{(details as DetailsExperience).role}</span>
            </div>
          )}
          <div>
            <h2 className="text-[#222222] font-semibold mb-4">Description</h2>
            <span className="text-[#222222]">{(details as DetailsEducation | DetailsExperience | DetailsAchievement)?.description}</span>
          </div>
          <div className="flex flex-row justify-start gap-4 font-bold">
            <button className="px-4 py-2 border border-[#222222] rounded-md text-[#222222]" onClick={handleEditClick}>
              Edit
            </button>
            <button className="px-4 py-2 border border-[#D33852] rounded-md text-[#D33852]" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </details>
      {isModelOpen && <Model isOpen={isModelOpen} onClose={handleCloseModel} />}
    </div>
  );
};

export default AccordionItem;