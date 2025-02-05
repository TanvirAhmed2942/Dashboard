import React from "react";
import { Table } from "antd";

import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import medical from "../../../assets/medical.png";

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
    slno: 1,
    image: medical,
    overview: "Edit",
    categoryname: "Medications, Food or Other Allergies",
  },
  {
    key: "2",
    slno: 1,
    image: medical,
    overview: "Edit",
    categoryname: "Medications, Food or Other Allergies",
  },
  {
    key: "3",
    slno: 1,
    image: medical,
    overview: "Edit",
    categoryname: "Medications, Food or Other Allergies",
  },
];

const columns = [
  {
    title: "Sl No.",
    dataIndex: "slno",
    key: "slno",
    width: "200px",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => <img src={image} width={50} height={50} />,
    width: "200px",
  },
  {
    title: "Category Name",
    dataIndex: "categoryname",
    key: "categoryname",
    width: "1000px",
  },
  {
    title: "Overview",
    dataIndex: "overview",
    key: "overview",
    width: "200px",
    render: () => (
      <h2 className="bg-[#eceffd] inline-block px-7 py-3 rounded-xl text-dashboard font-semibold text-[16px] cursor-pointer">
        Details
      </h2>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-5">
        <RiEdit2Fill color="#5b52a3" size={24} className="cursor-pointer" />
        <RiDeleteBin6Line color="red" size={24} className="cursor-pointer" />
      </div>
    ),
  },
];

export default function MedicalHistTable() {
  return (
    <div className="mt-10">
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}
