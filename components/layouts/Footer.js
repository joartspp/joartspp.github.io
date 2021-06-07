import Image from 'next/image';

import React , { useState , useEffect } from 'react';
import axios from 'axios';

import { sleep } from '../utils/delay';

import  { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import layoutStyle from '../../styles/layouts.module.css';

library.add(fas , fab , far);

const Footer = () => {
    return (
        <>
            <div className="container-fluid" style={{
                bottom:'0px',
                textAlign:'center'
            }}>
                <p>
                    สามารถขอรายละเอียดเพิ่มเติม หรือต้องการข้อมูลเพิ่มเติมได้ที่ joartsp@gmail.com หรือ FB : Supakorn Siridang
                </p>
            </div>
        </>
    )
}


export default Footer;