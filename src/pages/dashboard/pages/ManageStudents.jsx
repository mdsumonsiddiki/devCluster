import { IoEyeOutline } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";


const ManageStudents = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 flex-wrap">
                <h2 className="text-xl font-semibold text-black">Manage Students</h2>
                <div className="flex items-center gap-4 border-2 rounded-xl border-[#D4D8DD] px-4 bg-[#EFF3F6]">
                    <span className="text-3xl"><IoIosSearch /></span>
                    <input className="focus:outline-none py-4 w-full text-xl bg-transparent text-black" type="text" placeholder="Search" />
                </div>
                <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
                    <button className="bg-[#EFF3F6] py-4 px-6 rounded-xl hover:shadow-xl">Export</button>
                    <button className="bg-[#EFF3F6] py-4 px-6 rounded-xl hover:shadow-xl">Filter</button>
                    <button className="bg-[#EFF3F6] py-4 px-6 rounded-xl hover:shadow-xl">Print</button>
                </div>
                <h2 className=" text-black text-lg">25 Jul 2022  16:10</h2>
            </div>
            <div className='container mx-auto px-4 sm:px-8 '>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full overflow-hidden shadow-xl border-2 border-bgPrimary'>
                        <table className='min-w-full leading-normal shadow-2xl'>
                            <thead className="bg-red">
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-4 text-white text-center text-xl font-semibold  '
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-4  text-white text-center text-xl font-semibold '
                                    >
                                        Class
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-4  text-white text-center text-xl font-semibold '
                                    >
                                        Roll No.
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-4  text-white  text-xl font-semibold  text-center'
                                    >
                                        View / Edit / Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="space-y-8">{/* Table row data */}
                                <tr className="bg-red/15">
                                    <td className='px-5 mt-10 py-5 text-lg text-center  font-medium text-black'>
                                        <h2>Bruce Banner</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5 text-lg text-center font-medium text-black'>
                                        <h2>VI-A</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5 text-lg text-center font-medium text-black'>
                                        <h2>12</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5  text-center text-3xl font-medium text-red'>
                                        <div className="flex gap-8 items-center justify-center">
                                            <button><IoEyeOutline /></button>
                                            <button><LuPenLine /></button>
                                            <button><RiDeleteBin6Line /></button>
                                        </div>
                                    </td>


                                </tr>
                                <tr>
                                    <td className='px-5 mt-10 py-5 text-lg text-center  font-medium text-black'>
                                        <h2>Bruce Banner</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5 text-lg text-center font-medium text-black'>
                                        <h2>VI-A</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5 text-lg text-center font-medium text-black'>
                                        <h2>12</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5  text-center text-3xl font-medium text-red'>
                                        <div className="flex gap-8 items-center justify-center">
                                            <button><IoEyeOutline /></button>
                                            <button><LuPenLine /></button>
                                            <button><RiDeleteBin6Line /></button>
                                        </div>
                                    </td>


                                </tr>
                                <tr className="bg-red/15">
                                    <td className='px-5 mt-10 py-5 text-lg text-center  font-medium text-black'>
                                        <h2>Bruce Banner</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5 text-lg text-center font-medium text-black'>
                                        <h2>VI-A</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5 text-lg text-center font-medium text-black'>
                                        <h2>12</h2>
                                    </td>
                                    <td className='px-5 mt-10 py-5  text-center text-3xl font-medium text-red'>
                                        <div className="flex gap-8 items-center justify-center">
                                            <button><IoEyeOutline /></button>
                                            <button><LuPenLine /></button>
                                            <button><RiDeleteBin6Line /></button>
                                        </div>
                                    </td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageStudents;