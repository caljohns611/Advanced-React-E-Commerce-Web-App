import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { fetchProducts, fetchCategories } from './fakeStoreApi';

const Home = () => {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const { data: products } = useQuery(['products', category], () => fetchProducts(category));
    const { data: categories } = useQuery('categories', fetchCategories);

    return (
        <div>
            <h1>Product Catalog</h1>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value=''>All Categories</option>
                {categories?.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <div className='product-list'>
                {products?.map((product) => (
                    <div key={product.id} className='product'>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;