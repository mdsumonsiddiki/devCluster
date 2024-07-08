
const AddStudent = () => {
    return (
        <div className="px-10">
            <div className="flex items-center justify-between ">
                <h2 className="font-semibold text-black text-lg">Add Student</h2>
                <h2 className=" text-black text-lg">25 Jul 2022  16:10</h2>
            </div>
            <form className="mt-8 px-2 grid grid-cols-6 gap-4">
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="First Name" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Middle Name" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Last Name" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Select Class" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Select Division" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Enter Roll Number in Digits" />
                </div>
                <div className="mb-4 col-span-3 mt-8">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Address Line 1" />
                </div>
                <div className="mb-4 col-span-3 mt-8">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Address Line 2" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Landmark" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="City" />
                </div>
                <div className="mb-4 col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Pincode" />
                </div>
                <div className="col-span-2">
                    <button className="w-full py-4 text-white font-semibold text-xl bg-red rounded-md">Add Student</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;