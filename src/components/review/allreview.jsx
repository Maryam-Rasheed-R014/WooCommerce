import React from "react";
import { Button, Dropdown, Space } from "antd";
import { Icon } from "@iconify/react";

import person from "../../assets/images/Vector.jpg"
import { Select} from 'antd';
const handleChange = value => {
  console.log(`selected ${value}`);
};
export default function Allreview() {
  const items = [
    {
      key: "1",
      label: <p>Most relevent</p>,
    },
  ];
  const reviews = [
  {
    id: 1,
    title: "LSX Theme",
    reviewer: "Warwick Booth",
    date: "22 April, 2023",
    rating: 5,
    review:
      "Nice simple theme, optimised for the WordPress block editor & WooCommerce plugin.",
    avatar:person 
  },
  {
    id: 2,
    title: "Tour Operator Plugin",
    reviewer: "Warwick Booth",
    date: "22 April, 2023",
    rating: 5,
    review:
      "The LSX Tour Operator plugin is a comprehensive WordPress plugin designed specifically for tour operators and travel agencies.",
    avatar:person
  },
  {
    id: 3,
    title: "Booking Add-on",
    reviewer: "Jane Smith",
    date: "10 May, 2023",
    rating: 4,
    review:
      "Great plugin for adding booking functionality. Easy to use and integrate with existing site.",
    avatar: person
  },
];


  return (
    <>
      <h3 className="font-bold pl-5 py-15 text-3xl">All Reviews Block</h3>
      <div className="flex justify-end gap-2 mb-5 mr-2">
        <p>ordered by</p>

       <Space wrap>
    
  
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[ { value: "relevant", label: "Most Relevant" },
    { value: "recent", label: "Most Recent" },]}
      placeholder="select it"
    />
  </Space>
      </div>
      <div>
        {
            reviews.map((k) =>(
                <div>

                    <div className="flex justify-between py-4 ">
                    <div className="flex gap-3"><img src={k.avatar} alt=""  className="bg-[var(--bg-dark)]   border-3"/>
                    <div><h3 className="font-semibold">{k.title}</h3>
                    <p className="pt-3">{k.date}</p></div></div>
                    <div><p className="flex"><Icon icon="fluent-color:star-32" width="32" height="32" />
                    <Icon icon="fluent-color:star-32" width="32" height="32" />
                    <Icon icon="fluent-color:star-32" width="32" height="32" />
                    <Icon icon="fluent-color:star-32" width="32" height="32" />
                    <Icon icon="fluent-color:star-32" width="32" height="32" />
                    </p>
                    
                    </div>
   
                     </div>
                     <p className="font-medium">{k.review}</p>
                    
                </div>
                  

            )
       ) }
      </div>



    </>
  );
}
