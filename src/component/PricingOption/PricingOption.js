import React from 'react';
import Feature from '../Feature/Feature';


const PricingOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-gray-500  p-3 rounded-md text-white'>
            <div>
                <h1 className=' font-bold text-4xl'>{option.name}</h1>
                <p className=' font-bold'><span className='text-3xl'>{option.price}</span> <span className='text-2xl'>/mon</span></p>
            </div>

            {
                features.map( (feature, idx) => <Feature 
                key={idx}
                feature={feature}
                ></Feature>)
            }

            <button className='bg-green-400 w-full py-2 rounded-md text-2xl mt-6'>Buy Now</button>
        </div>

    );
};

export default PricingOption;