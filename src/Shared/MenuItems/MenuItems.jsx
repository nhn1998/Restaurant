import React from 'react';

const MenuItems = ({ item }) => {
    const { image, price, recipe, name } = item
    return (
        <div className='flex space-x-3'>
            <img className='w-[120px] h-[104px]' style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h1 className='uppercase'>{name}------------</h1>
                <p>{recipe}</p>

            </div>
            <div>
                <p className='text-yellow-400'>{price}</p>
            </div>
        </div>
    );
};

export default MenuItems;