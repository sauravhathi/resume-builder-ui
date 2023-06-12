import React, { useState } from "react"
import Model from './Model';


export default function AddNew() {
    const [isModelOpen, setModelOpen] = useState(false);

    const handleAddNewClick = () => {
        console.log("add new clicked");
        setModelOpen(true);
    };

    const handleCloseModel = () => {
        console.log("close clicked");
        setModelOpen(false);
    };

    return (
        <div>
            <button className="w-full text-[#222222] mt-4 text-center font-semibold px-4 py-2 border border-[#222222] rounded-md" onClick={handleAddNewClick}>
                Add New
            </button>
            {isModelOpen && <Model isOpen={isModelOpen} onClose={handleCloseModel} />}
        </div>
    )
}