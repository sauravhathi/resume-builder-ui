import React from 'react'
import { TfiUpload } from 'react-icons/tfi'
export default function PersonalDetails() {
    return (
        <div className="grid grid-cols-4 container">
            <div className="bg-[#F5F5F5] w-[200px] h-[200px] border-dashed border-[#EBEBEB] border-2 rounded-full flex flex-col justify-center items-center">
                <div className="flex flex-row items-center border-2 border-[#EBEBEB] bg-white text-[#717171] rounded-md px-4 py-2">
                    <TfiUpload />
                    <h2 className="ml-2 font-semibold">
                        Upload photo
                    </h2>
                </div>
            </div>
            <div className="w-full col-span-3">
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md"/>
                    </div>
                    <div className="">
                        <label htmlFor="bio">Short Bio</label>
                        <input type="text" name="bio" id="bio" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md"/>
                    </div>
                    <div className="">
                        <label htmlFor="email">Email-Id</label>
                        <input type="text" name="email" id="email" className="w-full px-4 py-2 border-2 border-[#EBEBEB] rounded-md"/>
                    </div>
                </div>
                <button className="bg-[#008392] text-white px-4 py-2 rounded-md mt-4">
                    Save
                </button>
            </div>
        </div>
    )
}