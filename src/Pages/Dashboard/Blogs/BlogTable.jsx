import React from "react";
import { Table } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";
import liver from "../../../assets/liver.png";
import { render } from "react-dom";

const Edit = () => {
  return (
    <button>
      <RiEdit2Fill color="#5b52a3" size={24} />
    </button>
  );
};

const Delete = () => {
  return (
    <button>
      <RiDeleteBin6Line color="red" size={24} />
    </button>
  );
};

const AddTips = () => {
  return (
    <div className="w-40 h-[45px] bg-dashboard flex items-center justify-center rounded gap-2 text-white">
      <LuPlus color="white" size={20} />
      <p>Add Tips</p>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="flex gap-2">
      <Edit />
      <Delete />
    </div>
  );
};

const Text = () => {
  return (
    <p className="break-words">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto amet quod
      non blanditiis beatae asperiores vel nihil debitis dolores ullam! Aliquam
      veritatis aliquid velit temporibus ullam optio consequatur nostrum aut?
    </p>
  );
};

const dataSource = [
  {
    key: "1",
    date: "20-03-2024",
    image: liver,
    description: <Text />,
    categoryname: "Fruits", // Category Name
    source: "Daily Star",
  },
  {
    key: "2",
    date: "20-03-2024",
    image: liver,
    description: <Text />,

    categoryname: "Fruits", // Category Name
    source: "Daily Star",
  },
  {
    key: "3",
    date: "20-03-2024",
    image: liver, // Example image
    description: <Text />,
    categoryname: "Fruits", // Category Name
    source: "Daily Star",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "170px",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => <img src={image} width={50} height={50} />,
    width: "150px",
  },
  {
    title: "Title",
    dataIndex: "description",
    key: "description",
    width: "1000px",
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    width: "200px",
  },
  {
    title: "Overview",
    dataIndex: "overview",
    key: "overview",
    render: (_, record) => (
      <div className="flex gap-5">
        <RiEdit2Fill color="#5b52a3" size={24} />
        <RiDeleteBin6Line color="red" size={24} />
      </div>
    ),
  },
];

export default function BlogTable() {
  return (
    <div className="mt-10">
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}
