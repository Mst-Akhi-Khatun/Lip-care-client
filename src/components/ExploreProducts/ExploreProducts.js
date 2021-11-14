import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Menubar from '../Header/Menubar/Menubar';


const ExploreProducts = () => {
    const [items, setItems] = useProduct();

    return (
        <div className="mb-5">
            <Menubar />
            <h1 className="text-uppercase mt-3"><span className="pink-text">Lipsticks</span> We Provide</h1>
            <div className="container">
                <div className="row row-cols-1 my-2 row-cols-md-3 g-5">

                    {
                        items.map(item =>
                            <div className="col">
                                <div className="card h-100 d-flex align-items-center p-3">
                                    <img src={item?.img} className="card-img-top" width="50px" height="170px" alt="..." />
                                    <div className="card-body text-center">
                                        <h2 className="card-title">{item?.name}</h2>
                                        <h5 className="card-text"> {item?.description}</h5>
                                        <h3 className="card-text">Price: ${item?.price}</h3>
                                        <button className="pink-btn mt-2">Order Now</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreProducts;