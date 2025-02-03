import React, { useEffect, useState } from "react";
import card1 from "../../assets/SUBS1.jpg";
import card2 from "../../assets/SUBS2.png";
import card3 from "../../assets/SUBS3.png";
import { FaCircleCheck } from "react-icons/fa6";
import { Card, Space, Button } from "antd";

const SubscriptionCard = () => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title={
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold">1 Month Interval</p>
            <p className="text-dashboard">Price: $10</p>
          </div>
        }
        style={{
          width: 200,
          height: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <Button className="rounded-lg px-10">Edit Details</Button>
      </Card>
    </Space>
  );
};
const Subscription = () => {
  return (
    <div className="mx-14 mt-24">
      {/* header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Subscription</h1>
        <button className="bg-dashboard text-white h-10 px-4 rounded-md">
          Create Subscription
        </button>
      </div>
      <SubscriptionCard />
    </div>
  );
};

export default Subscription;
