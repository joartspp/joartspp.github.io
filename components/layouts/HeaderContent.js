import Image from 'next/image';

import  { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { motion } from "framer-motion";

import layoutStyle from '../../styles/layouts.module.css';

library.add(fas , fab , far)

const HeadContent = () => {
    
    return (
        <>  
            <div className="container-fluid" id="header" style={{
                    marginTop:"20px",
                    // border:"1px solid red",
            }}>
                <div className="row" style={{}}>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 mx-auto" style={{
                        textAlign:"center",
                        borderBottom:"dashed 2px #CCCCCC",
                    }}>
                        <div className={layoutStyle.nameDiv}>Supakorn Siridang</div>
                        <div className={layoutStyle.devDiv}>"Anything is possible with code"</div>
                        <div className={layoutStyle.iconic}>
                            <a href="https://github.com/joartspp" className={layoutStyle.thisIcon} target="_blank"><FontAwesomeIcon icon={["fab","github"]}/></a>
                            <a href="https://www.facebook.com/joartsupakorn/" className={layoutStyle.thisIcon} target="_blank"><FontAwesomeIcon icon={["fab","facebook"]}/></a>
                            <a href="https://www.instagram.com/xjoez/" className={layoutStyle.thisIcon} target="_blank"><FontAwesomeIcon icon={["fab","instagram"]}/></a>
                            <a href="https://www.xjoez.com" className={layoutStyle.thisIcon} target="_blank"><FontAwesomeIcon icon={["fas","globe"]}/></a>
                        </div>
                        <div style={{marginBottom:'10px'}} className={layoutStyle.contact}>Email :<span style={{fontWeight:'400',marginRight:'10px'}}>joartsp@gmail.com</span> Tel : <span style={{fontWeight:'400'}}>098-2505277</span></div>
                    </div>
                </div>
            </div>
        </>
    )

};


export default HeadContent;