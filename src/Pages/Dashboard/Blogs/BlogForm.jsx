import React from "react";
import { Input } from "antd";
import TextEditor from "./TextEditor";
import { LuPlus } from "react-icons/lu";

export default function ModalForm() {
  return (
    <div className="h-80% flex flex-col gap-10 ">
      <div className="flex justify-between mt-3 relative">
        <div className="w-[425px] h-[148px] flex flex-col justify-between">
          <div>
            <p className="text-[12px]">Title</p>
            <Input className=" w-full min-w-32 h-11" />
          </div>
          <div>
            <p className="text-[12px]">Source(If Available)</p>
            <Input className=" w-full min-w-32 h-11" />
          </div>
        </div>
        <div className="w-[425px] h-[148px] flex flex-col justify-between">
          <p className="text-[12px]">Upload Image</p>
          <Input className=" w-full min-w-32 h-full border-dashed " />
        </div>
      </div>
      <TextEditor />
      <div className="w-40 h-[45px] bg-dashboard flex items-center justify-center rounded gap-2 text-white cursor-pointer absolute right-10 bottom-10">
        <LuPlus color="white" size={20} />
        <p>Add Blog</p>
      </div>
    </div>
  );
}
