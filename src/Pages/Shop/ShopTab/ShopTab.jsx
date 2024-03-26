import React from 'react';
import CardItems from '../../CardItems/CardItems';

const ShopTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-7'>
            {
                items.map(item=><CardItems key={item._id} items={item}></CardItems>)
            }
        </div>
    );
};

export default ShopTab;