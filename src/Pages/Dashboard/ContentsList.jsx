import React from "react";
// import liver from "../../assets/liver.png";
import { RiDeleteBin6Line } from "react-icons/ri";

// const ListData = [
//   { id: 1, icon: liver, cat: "Liver", overview: "Edit" },
//   { id: 2, icon: liver, cat: "Liver", overview: "Edit" },
//   { id: 3, icon: liver, cat: "Liver", overview: "Edit" },
//   { id: 4, icon: liver, cat: "Liver", overview: "Edit" },
//   { id: 5, icon: liver, cat: "Liver", overview: "Edit" },
//   { id: 6, icon: liver, cat: "Liver", overview: "Edit" },
//   { id: 7, icon: liver, cat: "Liver", overview: "Edit" },
// ];

// export default function ContentsList() {
//   return (
//     <ul className="list-none p-0 w-full">
//       {ListData.map((item) => (
//         <li key={item.id} className="flex items-center justify-between w-full py-3 px-2 hover:bg-gray-300 ">
//           <p className="w-12 text-center">{item.id}</p>
//           <img src={item.icon} alt="Liver" className="w-8 h-8" />
//           <span className="w-32 text-center font-medium">{item.cat}</span>
//           <button className="w-20 h-8 text-[#023f86] bg-[#eceffd] rounded-lg">{item.overview}</button>
//           <button className="w-12 h-8 text-[#c11415] rounded-lg flex justify-center items-center">
//             <RiDeleteBin6Line size={18} />
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

import { Table } from 'antd';


const Edit=()=>{
    return(
        <button className="bg-[#eceffd] text-[#023f86] px-4 py-0.5 rounded-md text-lg font-medium">Edit</button>
    )
}

const Delete=()=>{
    return(
        <button><RiDeleteBin6Line color="red" size={24}/></button>
    )
}





const dataSource = [
  {
    key: '1',
    sno: 1, // S.No
    categoryicon: '🍏', // Example icon
    categoryname: 'Fruits', // Category Name
    overview: <Edit/>, // Action for overview
    action: <Delete/>, // Delete icon
  },
  {
    key: '2',
    sno: 2, // S.No
    categoryicon: '🍎', // Example icon
    categoryname: 'Fruits', // Category Name
    overview: <Edit/>, // Action for overview
    action: <Delete/>, // Delete icon
  },
  {
    key: '3',
    sno: 3, // S.No
    categoryicon: '🍎', // Example icon
    categoryname: 'Fruits', // Category Name
    overview: <Edit/>, // Action for overview
    action: <Delete/>, // Delete icon
  },
];

const columns = [
  {
    title: 'S.No',
    dataIndex: 'sno',
    key: 'sno',
  },
  {
    title: 'Category Icon',
    dataIndex: 'categoryicon',
    key: 'categoryicon',
  },
  {
    title: 'Category Name',
    dataIndex: 'categoryname',
    key: 'categoryname',
  },
  {
    title: 'Overview',
    dataIndex: 'overview',
    key: 'overview',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },

];

export default function ContentsList() {
  return (
    <div className="mx-14">
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
  )
  
  
}
