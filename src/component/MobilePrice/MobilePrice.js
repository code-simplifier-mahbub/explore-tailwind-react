import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MobilePrice = () => {
    const [phones, setPhones] = useState([])
    console.log(phones)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneLoded = data.data.data;
                const Phones = phoneLoded.map(phone => {
                    console.log(phone);
                    const priceSplit = phone.slug.split('-');
                    const price = priceSplit[1];
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price,
                    }
                    return singlePhone;
                })
                setPhones(Phones)

            })
    }, [])

    return (
        <BarChart width={850} height={220} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default MobilePrice;