import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id: 1, name: 'Free', price: 0.00, features: [
            'Free feature',
            'Unnecessery feature',
            'oshadharon feature',
            'dorkar nai feature',
            'hudai feature',
        ]},
        {id: 1, name: 'Standerd', price: 500, features: [
            'Awesome feature',
            'Unnecessery feature',
            'oshadharon feature',
            'dorkar nai feature',
            'hudai feature',
        ]},
        {id: 1, name: 'Premium', price: 800, features: [
            'Premium feature',
            'Unnecessery feature',
            'oshadharon feature',
            'dorkar nai feature',
            'hudai feature',
        ]},
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold text-white p-12 bg-zinc-400'>Best Deal Of Town</h1>
            <div className='grid md:grid-cols-3 gap-3 m-3'>
            {
                pricingOption.map(option=> <PricingOption
                key={option.id}
                option={option}
                >
                </PricingOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;