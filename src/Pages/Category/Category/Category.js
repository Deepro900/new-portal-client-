import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>this is category : {news}</h2>
        </div>
    );
};

export default Category;