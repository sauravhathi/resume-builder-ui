import React,{ useState, useContext } from "react";

const Model: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
    
    if (!isOpen) return null;

    const handleSaveClick = () => {
        console.log("save clicked");
        onClose();
    };

    const handleCancelClick = () => {
        console.log("cancel clicked");
        onClose();
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-20 z-50">
                <div className="bg-white rounded-md p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4">
                    <div>
                        <h2 className="text-[#222222] text-[24px] font-bold mb-4">Add new education</h2>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 flex flex-col gap-2">
                                <label htmlFor="institute" className="font-semibold">Institute</label>
                                <input type="text" name="institute" id="institute" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md" />
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <label htmlFor="degree" className="font-semibold">Degree</label>
                                <input type="text" name="degree" id="degree" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md" />
                            </div>
                            <div className="col-span-2 grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="start-date" className="font-semibold">Start Date</label>
                                    <input type="text" name="start-date" id="start-date" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="end-date"  className="font-semibold">End Date</label>
                                    <input type="text" name="end-date" id="end-date" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md" />
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <label htmlFor="description" className="font-semibold">Description</label>
                                <input type="text" name="description" id="description" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md h-[150px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-4 font-bold">
                        <button className="px-4 py-2 border border-[#222222] rounded-md text-[#222222]" onClick={handleSaveClick}>
                            Save
                        </button>
                        <button className="px-4 py-2 border border-[#D33852] rounded-md text-[#D33852]" onClick={handleCancelClick}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default Model;