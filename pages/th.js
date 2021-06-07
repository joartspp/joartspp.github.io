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
        // await sleep(2000);
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

    // const waitingData = async () => {
    //     var rawData = await axios.get(`https://api.github.com/users/joartspp`);
    //     var xJoezData = rawData.data;
    //     // await sleep(2000);
    //     // setLoading(true)
    // };

    // if (!loading) {
    //     return <>
    //         <Header tilePage = {`Welcome to my resume`} />
    //         <Loader/>
    //     </>
    // }

    return (
        <>
            <Header tilePage = {`Resume - Supakorn Siridang (TH)`} />
            {!loading  &&
                <Loader loading={loading} />
            }
            {loading &&
                // <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:1}}>
                <>
                    <HeadContent />
                    <main>
                        <MainContent kak = {``} eff = {eff}/>
                    </main>
                    <Footer />
                </>
                // </motion.div>
            }
        </>
    )
};

export const getStaticProps = async () => {
    // var rawData = await axios.get(`https://api.github.com/users/joartspp`);
    let rawData = {
        data:{
            name:"xJoez"
        }
    }
    let getData = rawData.data;
    return {
        props:getData
    }
};

export default Index;