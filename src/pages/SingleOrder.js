import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getOrders, updateOrders } from '../features/auth/authSlice';

const SingleOrder = () => {
    return (
        <div>
        <h3 className='mb-4'>Detail order</h3>
        <div>
            <ul>
                <li style={{fontSize:"18px"}}>UserName: Nhat Bui </li>
                <li style={{fontSize:"18px"}}>Address: 741 hung vuong, di linh, lam dong</li>
                <li style={{fontSize:"18px"}}>Mobile: 0933804785</li>
                <li style={{fontSize:"18px"}}>Date: 00:27:10, 1/2/2023</li>
                <li style={{fontSize:"18px"}}>
                    Product:
                            <p className='ms-5'>Samsung S22</p>
                        
                            <p className='ms-5'>Apple Watch Series 6</p>
                </li>
                <li style={{fontSize:"18px"}}>Amount: $ 1210</li>
            </ul>
        </div>
    </div>
    );
};

export default SingleOrder;