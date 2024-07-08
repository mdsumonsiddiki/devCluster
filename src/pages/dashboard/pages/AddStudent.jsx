
const AddStudent = () => {
    return (
        <div className=" px-2 md:px-5">
            <div className="flex items-center justify-between px-8 flex-wrap">
                <h2 className="font-semibold text-black text-lg">Add Student</h2>
                <h2 className=" text-black text-lg">25 Jul 2022  16:10</h2>
            </div>
            <form className="grid grid-cols-6 gap-4 shadow-xl px-4 md:px-8 py-8">
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="First Name" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Middle Name" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Last Name" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Select Class" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Select Division" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Enter Roll Number in Digits" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-3 lg:mt-8">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Address Line 1" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-3 lg:mt-8">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Address Line 2" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Landmark" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="City" />
                </div>
                <div className="mb-4 col-span-6 md:grid-cols-3 lg:col-span-2">
                    <input className="w-full p-4 border-2 border-black/10 rounded-md focus:border-red/50 text-xl focus:outline-none" type="text" placeholder="Pincode" />
                </div>
                <div className="col-span-6 md:grid-cols-3 lg:col-span-2">
                    <button className="w-full py-4 text-white font-semibold text-xl bg-red rounded-md">Add Student</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;