import React from 'react';

const SectionTitle = ({title,subTitle}) => {
  return (
    <div>
      <div className=' relative'>
        <h1 className=' text-[#2c4964] font-bold text-4xl pb-3 mb-4 border-b inline-block'>{title}</h1>
        <span className=' absolute bg-[#1977cc] w-16 bottom-4 left-0 right-0 mx-auto h-1'></span>
      </div>
      <p>{subTitle }</p>
    </div>
  );
};

export default SectionTitle;