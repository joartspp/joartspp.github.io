import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import loaderStyle from '../../styles/Loader.module.css';



const Loader = ({loading}) => {

    return (
        <>
            <div className={loaderStyle.Loader}>
                <div className={loaderStyle.WaitingFor} style={{textAlign:'center'}}>
                    <Image src="/img/loading-pic.gif" width="80" height="80"/>
                    <p style={{fontSize:'20px'}}>Loading...</p>
                </div> 
            </div>
        </>
    )
};


export default Loader;