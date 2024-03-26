import React from 'react';

const CardItems = ({items}) => {
    const { image, price, recipe, name } = items
    const handleAddToCart=(food)=>{
        // console.log(food)
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[400px]">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <p className='absolute top-0 bg-slate-900 text-white mr-4 mt-4 px-4 rounded'>{price}</p>
                    </div>
                    <button onClick={()=>handleAddToCart(items)} className='btn btn-outline border-0 border-b-4 my-4'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardItems;