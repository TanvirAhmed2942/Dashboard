import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { LuPlus } from 'react-icons/lu';
import { Table } from 'antd';

const Edit=()=>{
    return(
        <button><RiEdit2Fill color="#5b52a3" size={24}/></button>
    )
}

const Delete=()=>{
    return(
        <button><RiDeleteBin6Line color="red" size={24}/></button>
    )
}


const AddTips =()=>{
  return(
    <div className='w-40 h-[45px] bg-dashboard flex items-center justify-center rounded gap-2 text-white'>
      <LuPlus color='white' size={20} />
      <p>Add Tips</p>
    </div>
  )
}

const Overview =()=>{
  return(
    <div className='flex gap-2'>
      <Edit/>
      <Delete/>
    </div>
  )
}


const dataSource = [
  {
    key: '1',
    date: '20-03-2024',
    image: '🍏', // Example image
    description: 'Fresh green apple',
    categoryicon: '🍏', // Example icon
    categoryname: 'Fruits', // Category Name
    overview: <Overview />, // Action for overview
  },
  {
    key: '2',
    date: '20-03-2024',
    image: '🍎', // Example image
    description: 'Delicious red apple',
    categoryicon: '🍎', // Example icon
    categoryname: 'Fruits', // Category Name
    overview: <Overview />, // Action for overview
  },
  {
    key: '3',
    date: '20-03-2024',
    image: '🍌', // Example image
    description: 'Sweet yellow banana',
    categoryicon: '🍎', // Example icon
    categoryname: 'Fruits', // Category Name
    overview: <Overview />, // Action for overview
  },
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Overview',
    dataIndex: 'overview',
    key: 'overview',
  },
];



export default function Insight() {
  return (
    

    <div className='flex flex-col mx-14 mt-24'>
      <div className='flex items-center justify-between '>
      <h2 className='text-[20px] font-medium'>Insightful Tips</h2>
      <AddTips/>
    </div>
    <div className='mt-10'>
    <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
    </div>
    
  )
}
