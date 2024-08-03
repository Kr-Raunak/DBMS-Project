import React from 'react'
// import { HiUserGroup } from "react-icons/hi2";

// const OurTeam = () => {
//   return (
//     <div className=' h-screen w-full flex justify-center flex-col items-center bg-gray-50 '>
//       {/* <span className="flex items-center">
//           <span className='text-gray-300'>
//             <FaShippingFast className="text-5xl" />
//           </span>
//           <span className="text-yellow-400 p-2 m-2 text-2xl ml-1">Ship<span className='text-gray-300'>Mate</span></span>
//         </span> */}
//         <div className="flex items-center justify-center h-screen">
//           <h2 className='text-lg font-bold flex items-center'>
//             <HiUserGroup className='text-2xl mr-2' />
//             TEAM
//           </h2>
//         </div>

//         <ul className=' w-[40%] py-4 0 flex justify-center flex-col items-center border-[4px] border-slate-400 rounded-xl'>
        

//         <li className='w-[100%] px-4 text-md font-semibold flex justify-between'><div>MITUL PATEL(TEAM LEAD)</div><div>2022UGCS033</div></li>
//         <hr class='w-[90%] h-[2px] rounded-full bg-gray-400'/>
//         <li className='w-[100%] px-4 text-md font-semibold flex justify-between'><div>KUMAR RAUNAK(TEAM LEAD)</div><div>2022UGCS127</div></li>
//         <hr class='w-[90%] h-[2px] rounded-full bg-yellow-500'/>
//         <li className='w-[100%] px-4 text-md font-semibold flex justify-between'><div>SHASHANK SHEKHAR</div><div>2022UGCS037</div></li>
//         <hr class='w-[90%] h-[2px] rounded-full bg-gray-400'/>
//         <li className='w-[100%] px-4 text-md font-semibold flex justify-between'><div>MOHIT KUMAR</div><div>2022UGCS114</div></li>
//         <hr class='w-[90%] h-[2px] rounded-full bg-yellow-400'/>
//         <li className='w-[100%] px-4 text-md font-semibold flex justify-between'><div>RAHUL SWARNAKAR</div><div>2022UGCS110</div></li>
//         <hr class='w-[90%] h-[2px] rounded-full bg-yellow-400'/>

// </ul>

//     </div>
//   )
// }

// export default OurTeam

import { HiUserGroup } from 'react-icons/hi';

const TeamSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-lg font-bold flex items-center mb-4">
        <HiUserGroup className="text-4xl mr-2" />
        TEAM
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="min-w-full">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-bold">MITUL PATEL (TEAM LEAD)</td>
              <td className="px-4 py-2">2022UGCS033</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-bold">KUMAR RAUNAK (TEAM LEAD)</td>
              <td className="px-4 py-2">2022UGCS127</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">SHASHANK SHEKHAR</td>
              <td className="px-4 py-2">2022UGCS037</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">MOHIT KUMAR</td>
              <td className="px-4 py-2">2022UGCS114</td>
            </tr>
            <tr>
              <td className="px-4 py-2">RAHUL SWARNAKAR</td>
              <td className="px-4 py-2">2022UGCS110</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamSection;
