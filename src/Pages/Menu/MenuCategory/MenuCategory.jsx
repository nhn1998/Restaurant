import React from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,img,title}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 my-16'>
                {
                    items.map(item=><MenuItems key={item._id} item={item}>
                    
                    </MenuItems>)
                }
            </div>
            <Link to={`/shop/${title}`}>
            <button className='btn btn-outline border-0 border-b-4 my-4'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;