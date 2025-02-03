import React from 'react';
import { Collapse } from "antd";


const blogdata = [
  { id: 1, label: 'Cataracts', title: 'A leading cause of vision loss in the US' },
  { id: 2, label: 'Cataracts', title: 'A leading cause of vision loss in the US' },
  { id: 3, label: 'Amblyopia', title: 'Also known as "lazy eye"' },
  { id: 4, label: 'Cataracts', title: 'A leading cause of vision loss in the US' },
  { id: 5, label: 'Cataracts', title: 'A leading cause of vision loss in the US' },
  { id: 6, label: 'Cataracts', title: 'A leading cause of vision loss in the US' },
];

const items = () => {
  return blogdata.map((item) => ({
    id: item.id,
    label: `${item.label}`,
    children: <p>{item.title}</p>,
  }));
};

// console.log(items());



export default function Blogs() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className='mx-14 mt-24'>
    <Collapse items={items()} defaultActiveKey={['0']} onChange={onChange} />
    </div>
     
  );
}
