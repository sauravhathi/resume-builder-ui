
export default function Header() {
    return (
        <>
            <div className="py-[22px] px-[40px] flex justify-between items-center border-b border-[#D9D9D9] sticky top-0 bg-white z-10">
                <div className="flex items-center">
                    <img src="/resume-builder-logo.svg" alt="Resume Builder" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold ml-2 text-[#5050C5]">Resume Builder</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className=" text-[#222222] px-4 py-2 border border-[#222222] rounded-md">Import</button>
                    <button className=" text-white px-4 py-2 border-transparent bg-[#D33852] rounded-md">Export</button>
                </div>
            </div>
        </>
    )
}