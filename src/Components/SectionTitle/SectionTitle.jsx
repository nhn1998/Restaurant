import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-8'>
            <h2 className='text-yellow-600'>---{subHeading}---</h2>
            <h1 className='text-4xl uppercase border-y-4 py-4'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;