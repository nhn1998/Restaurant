import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/Hooks/useHooks';

const PopularItems = () => {
    const [menu]=useMenu()
    const popularMenu = menu.filter(item=>item.category === 'popular')
    
    return (
        <section className='mb-20'>
            <SectionTitle heading='from our menu' subHeading='Popular Items'></SectionTitle>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                {
                    popularMenu.map(item=><MenuItems key={item._id} item={item}>
                    
                    </MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularItems;