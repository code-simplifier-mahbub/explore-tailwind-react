import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='w-6 h-6 text-green-300'></CheckCircleIcon>
            <h1 className='text-2xl ml-2'>{feature}</h1>
        </div>
    );
};

export default Feature;