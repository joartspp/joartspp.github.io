import React , { useState , useEffect } from 'react';
import Head from 'next/head';
import {Router , Route} from 'next/router';
import Image from 'next/image';

import { motion } from "framer-motion";
import axios from 'axios';

import { sleep } from '../components/utils/delay';

import Header from '../components/includes/Header';
import Loader from '../components/utils/Loader';
import HeadContent from '../components/layouts/HeaderContent';
import MainContent from '../components/layouts/Container';
import Footer from '../components/layouts/Footer';

const Index = (props) => {
    const [size,setSize] = useState('70px');
    const [text,setText] = useState('Welcome');
    const [loading,setLoading] = useState(false);

    const [eff,setEff] = useState(false);
    useEffect(async () => {
        await sleep(2000);
        setLoading(true);
    },[]);

    const changeState = async (fx,va,delay = 1000) => {
        fx(va);
        await sleep(delay);
        return;
    }

    const next = async () => {
        setEff(true);
    };

    return (
        <>
            <Header tilePage = {`Resume - Supakorn Siridang`} />
            {!loading  &&
                <Loader loading={loading} />
            }
            {loading &&
                <>
                    <HeadContent />
                    <main>
                        <MainContent/>
                    </main>
                    <Footer />
                </>
            }
        </>
    )
};

export default Index;