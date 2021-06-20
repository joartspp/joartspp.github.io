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


const MainContent = ({kak}) => {
    return (
        <>
            <div aria-label="content" style={{padding:'0',marginTop:'10px'}}>
                <div className="wrapper">
                    {/* Introduce */}
                    <div className="container" id="IntroduceMySelf">
                        <div className={layoutStyle.HeaderTopic}>เกี่ยวกับฉัน</div>
                        <div className="row" style={{
                            marginLeft:'5px',
                            marginRight:'5px',
                            borderBottom:"dashed 2px #CCCCCC",
                        }}>
                            <div className="col-xs-12 col-sm-4 col-md-12 col-lg-3" style={{textAlign:'center'}}>
                                <span className={layoutStyle.pictureProfile} style={{
                                    backgroundImage:'url(/img/profile_nisit.jpg)',
                                    marginRight:'10px'
                                }}></span>
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-12 col-lg-9" style={{
                                padding:'10px'
                            }}>
                                <p className={layoutStyle.pIntro}>
                                    สวัสดีครับ, ผมชื่อ <b>นายศุภกร ศิริแดง</b> ชื่อเล่น <b>"โจ"</b> ครับ ตอนนีอายุ 22 ปี จบการศึกษาจาก ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์
                                    มหาวิทยาลัยเกษตรศาสตร์ (บางเขน) เกรดรวม 3.13
                                    <br></br> จุดเริ่มต้นที่หันมาสนใจเรื่องการเขียนโปรแกรม เนื่องจากมีความสนใจที่จะเปิดเซิฟเวอร์เกม ซึ่งใช้ภาษา <mark>Lua</mark> ในการพัฒนา จากนั้นได้ทำการศึกษาและเรียนรู้ด้วยตัวเอง
                                    เป็นเวลา 1 ปี ทำให้เรียนรู้ถึงการทำงาน การใช้งาน การปรับปรุงประสิทธิภาพทั้งฝั่ง Client และ Server ของระบบต่างๆที่มี และได้มีโอกาสทำเกี่ยวกับ User Interface ภายในเกมที่มีการทำงานหรือการใช้ภาษา
                                    ในการพัฒนาเหมือนกับการทำ Web application เช่น <mark>HTML,CSS,JS</mark> และได้มีการนำ Framework,Library ต่างๆมาประยุกต์ใช้ในการพัฒนา UI ดังกล่าว เช่น <mark>Vue.JS,Bootstrap,jQuery</mark>
                                    และระหว่างที่มีการศึกษาเรียนรู้เกี่ยวกับการเขียนระบบต่างๆ รู้สึกมีความชอบ หลงไหล ในการโค็ดทำให้มีการศึกษาเกี่ยวกับภาษาต่างๆ และการพัฒนาเว็บไซต์ อย่างต่อเนื่อง ซึ่งทำให้มีความสนใจในการ
                                    ทำงานเกี่ยวกับ Programming ครับ
                                    <br></br>
                                    <mark>
                                        <a style={{
                                            color:'#fff',
                                            textDecoration:'none'
                                        }} href="https://download.xjoez.com/other/Supakorn_Siridang_Resume.pdf" target="_blank">Resume PDF</a>
                                    </mark>
                                    <br></br>
                                    <mark>
                                    "Ready to learn new job :)"
                                    </mark>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Projects */}
                    <div className="container" id="Projects" style={{marginTop:'10px'}}>
                        <div className={layoutStyle.HeaderTopic}>โปรเจคภายในมหาวิทลัย</div>
                        <div className="row" style={{
                            // display:'flex',
                            // flexDirection:'column',
                            marginLeft:'5px',
                            marginRight:'5px',
                            borderBottom:"dashed 2px #CCCCCC",
                        }}>
                            <div className="col-xs-12" style={{textAlign:'center',marginBottom:'40px'}}>
                                <div className={layoutStyle.projectText} style={{
                                    width:'100%'
                                }}>
                                    - Senior Project -
                                </div>
                                <div className={layoutStyle.subText}>การศึกษาและวิเคราะห์ศักยภาพทางพลังงานแสงอาทิตย์เพื่อการผลิตไฟฟ้าสำหรับอาคารเรียน
                                <br></br>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และวิเคราะห์ความเป็นไปได้ของโครงการในการติดตั้งแผงเซลล์แสงอาทิตย์
                                <br></br>
                                <mark>
                                    <a href="https://solarcell.xjoez.com" target="_blank">Documents</a>
                                </mark>
                                </div>
                                <div className={layoutStyle.divpProject}>
                                    <p className={layoutStyle.pProject}>
                                        โปรเจคนี้เป็นโปรเจคจบที่ทำการศึกษาและวิเคราะห์เกี่ยวกับการใช้แสงอาทิตย์ในการผลิตไฟฟ้ามาใช้ในการเรียนการสอนของคณะ และความเป็นไปได้ทางด้านเศรษฐศาสตร์ (Feasibility)
                                        โดยมีการจำลองการติดตั้งแผงโซล่าเซลล์โดยใช้โปรแกรม PVSyst โดยเอกสารทั้งหมดที่เกี่ยวข้องถูกรวมไว้ใน Document แบบออนไลน์เพื่อที่อำนวยความสะดวกแก่ผู้ที่สนใจ และผู้ศึกษา
                                    </p>
                                </div>
                                <div className={layoutStyle.divpProject} style={{
                                    borderBottom:'dashed 2px #ccc',
                                    width:'50%',
                                    marginRight:'auto',
                                    marginLeft:'auto'
                                }}></div>
                            </div>
                            <div className="col-xs-12" style={{textAlign:'center',marginBottom:'40px'}}>
                                <div className={layoutStyle.projectText} style={{
                                    width:'100%'
                                }}>
                                    - Term Project -
                                </div>
                                <div className={layoutStyle.subText}>การวัดอุณหภูมิโดยการปรับค่า และการมอนิเตอร์โดยใช้ Netpie
                                <br></br>
                                <mark>
                                    <a href="https://www.canva.com/design/DAEacQ_3zfI/kVXp0Ey_ORouv29Y84bXPw/view?utm_content=DAEacQ_3zfI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank">Presentation link</a>
                                </mark>
                                
                                <mark style={{marginLeft:'10px'}}>
                                    <a href="https://github.com/joartspp/Adruino-MeasurementTerm-Code" target="_blank">Source Code</a>
                                </mark>
                                </div>
                                <div className={layoutStyle.divpProject}>
                                    <p className={layoutStyle.pProject}>
                                        โปรเจคนี้เป็นส่วนนึงของวิชาการวัดทางวิศวกรรม โดยการเป็นการศึกษาเกี่ยวกับ IoT (Internet of Things) โดยใช้ Arduino ในการวัดอุณหภูมิและค่าต่างๆ ในสถานที่ใดสถานที่หนึ่ง
                                        โดยควบคุมและตรวจสอบค่าผ่านทาง Netpie และมีการเก็บข้อมูลเพื่อทำการหาค่าความคลาดเคลื่อของการวัดระหว่าง Thermistor (NTC,PTC) ที่เป็นอุปกรณ์การวัดที่ใช้ความร้อนเปลี่ยนแปลงความต่างศักย์
                                        และ Thermocouple ที่เป็นอุปกรณ์สำหรับวัดอุณหภูมิระดับอุตสาหกรรม โดยผมได้ทำการออกแบบ ระบบการรับ-ส่งข้อมูล ที่ใช้ในการเก็บข้อมูลและการมอนิเตอร์เอง โดยการนำความรู้ทางด้านการเขียน Web application
                                        มาประยุกต์ใช้ในโครงงานนี้ Frontend ที่ใช้ในการมอนิเตอร์ดูค่าต่างๆ โดยใช้ <mark>Vue.JS,HTML,CSS,JS</mark> และ Backend ที่ใช้ในการรับ-ส่งข้อมูลโดยใช้ API ที่เขียนจาก <mark>ExpressJS(Node.Js)</mark> และเก็บข้อมูลในรูปแบบของ JSON
                                    </p>
                                    <div style={{textAlign:'center'}}>
                                        <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251681/851526375306821632/unknown.png" /><br></br>
                                        <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251681/851526398984192020/unknown.png" /><br></br>
                                        <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251681/851526423037870080/unknown.png" /><br></br>
                                        <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251681/851526454025650236/unknown.png" /><br></br>
                                        <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251681/851526475831836692/unknown.png" /><br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="Exp" style={{marginTop:'10px'}}>
                        <div className={layoutStyle.HeaderTopic}>ประสบการณ์และโปรเจคอื่นๆ</div>
                        <div className="row" style={{
                            // display:'flex',
                            // flexDirection:'column',
                            marginLeft:'5px',
                            marginRight:'5px',
                            borderBottom:"dashed 2px #CCCCCC",
                            }}>
                            <div className="col-xs-12" style={{textAlign:'center',marginBottom:'30px'}}>
                                <div className={layoutStyle.projectText} style={{
                                    width:'100%'
                                }}>
                                    - Game Developer -
                                </div>
                                <div className={layoutStyle.subText}>ผู้พัฒนาระบบ(สคริป)บน FiveM (GTA V multiplayer platform)
                                <br></br>
                                <mark>
                                    <a href="https://github.com/joartspp/DyzCarSystem" target="_blank">Example Source Code</a>
                                </mark>
                                <mark style={{marginLeft:'15px'}}>
                                    <a href="https://www.facebook.com/DowntownRoleplayFiveM" target="_blank">Fanpage Server (Suspended)</a>
                                </mark>
                                </div>
                                <div className={layoutStyle.divpProject}>
                                    <p className={layoutStyle.pProject}>
                                        เป็นจุดเริ่มต้นของความสนใจที่เริ่มในการเขียนโค็ด เพราะอยากเปิดเซิฟเวอร์เป็นของตัวเอง โดยเริ่มต้นจากที่ไม่มีความรู้เรื่องการเขียนโค็ดจึงได้เรียนรู้และศึกษาเองเป็นเวลา 1 ปี
                                        ทำให้เรียนรู้และเข้าใจการทำงานของโค็ด ระบบ โปรแกรมต่างๆที่เกี่ยวข้อง โดย FiveM จะรองรับการเขียนโค็ดหลายภาษาเช่น <mark>C#,Lua,JS</mark> โดยผมเริ่มศึกษาจาก
                                        ภาษา <mark>Lua</mark> ซึ่งเป็นภาษาที่เข้าใจง่ายที่สุดในการเขียน และมีการจัดการระบบฐานข้อมูลโดยใช้ <mark>MySQL</mark> ตลอดเวลาที่ศึกษาลองผิดลองถูกทำให้เริ่มมีความสนใจในด้านนี้มากขึ้นเรื่อยๆ จึงทำให้มีความสนใจในการเขียนเว็บแอพ
                                        ทำให้ศึกษาเรียนรู้เกี่ยวกับ <mark>HTML,CSS,JS</mark> และมีการศึกษาค้นคว้าหาความรู้ในภาษาต่างๆ อย่างต่อเนื่องเช่น <mark>JS,PHP,Python</mark> และปัจจุบันได้เป็น Freelance
                                        รับทำระบบภายในเซิฟเวอร์ สำหรับผู้ที่สนใจ โดยมีผู้ใช้บริการมากกว่า 10 เซิฟเวอร์
                                        <br></br>
                                        <br></br><b>- Source Code</b> ตัวอย่างที่แนบไว้เป็นระบบที่ทำขึ้นโดย Dyztiny เป็นทีมพัฒนาเซิฟเวอร์ FiveM ที่มีชื่อเสียงอันดับต้นๆของประเทศไทย และปัจจุบันผมได้เป็นส่วนหนึ่งในทีมดังกล่าว
                                        <br></br><b>- Fanpage</b> แฟนเพจที่แนบไว้เป็นแฟนเพจเฟสบุ๊คของทางเซิฟเวอร์ที่ผมเป็นผู้พัฒนา มีผู้เล่นในฐานข้อมูลมากกว่า 300 คน ปัจจุบันได้หยุดให้บริการแล้ว
                                        <br></br><b>- Clip</b> ที่แนบไว้เป็นตัวอย่างระบบที่มีลูกค้าสั่งทำ เป็นระบบที่มีลูกเล่น UI ที่ใช้ Vue.JS เข้าร่วมในการแสดงผล และ Backend เป็น Lua
                                    </p>
                                    <div style={{
                                        textAlign:'center'
                                    }}>
                                        <iframe className={layoutStyle.clipExam} src="https://www.youtube.com/embed/tuNyM0Sbf9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <br></br>
                                        <iframe className={layoutStyle.clipExam} src="https://www.youtube.com/embed/Vl0FeB5MBig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className={layoutStyle.divpProject} style={{
                                    borderBottom:'dashed 2px #ccc',
                                    width:'50%',
                                    marginRight:'auto',
                                    marginLeft:'auto'
                                }}></div>
                            </div>
                            <div className="col-xs-12" style={{textAlign:'center',marginBottom:'40px'}}>
                                <div className={layoutStyle.projectText} style={{
                                    width:'100%'
                                }}>
                                    - Web Developer -
                                </div>
                                <div className={layoutStyle.subText}>เว็บไซต์เรซูเม่
                                <br></br>
                                <mark>
                                    <a href="https://github.com/joartspp/joartspp.github.io" target="_blank">Source Code</a>
                                </mark>
                                </div>
                                <div className={layoutStyle.divpProject}>
                                    <p className={layoutStyle.pProject}>
                                        เว็บไซต์นี้คือเว็บล่าสุดที่พัฒนาขึ้นเพื่อทำเป็น Resume สำหรับการสมัครงานและเป็นที่เก็บสะสมผลงานของผม ซึ่งถูกพัฒนาขึ้นโดย
                                        ใช้ <mark>Next.JS</mark> ซึ่งเป็นครั้งแรกที่เขียนเว็บโดยใช้ <mark>React Framework</mark> เพื่อศึกษาและเรียนรู้เกี่ยวกับ React
                                        เนื่องจาก React สามารถพัฒนาได้หลากหลายรูปแบบทั้ง Web Application หรือ React Native โดยเว็บนี้เป็นจุดเริ่มต้นของการเรียนรู้และการเขียน
                                        React
                                    </p>
                                </div>
                                <div style={{
                                    borderBottom:'dashed 2px #ccc',
                                    width:'50%',
                                    marginRight:'auto',
                                    marginLeft:'auto',
                                    marginBottom:'15px'
                                }}></div>
                                <div className={layoutStyle.subText}>เว็บสำหรับขายสคริป รับทำระบบ และระบบ License (อยู่ในขั้นตอนการพัฒนา)
                                <br></br>
                                </div>
                                <div className={layoutStyle.divpProject}>
                                    <p className={layoutStyle.pProject}>
                                        โดยเว็บไซต์นี้กำลังพัฒนาเนื่องจากเพิ่มความสะดวกสบายให้กับผู้ใช้บริการในการสั่งซื้อและสั่งทำระบบที่ต้องการ โดยมีระบบ License ในการตรวจสอบก่อนที่
                                        สคริปจะทำงาน ว่าสคริปดังกล่าวเป็นสคริปที่ผ่านการซื้อจากทางเว็บไซต์หรือไม่ โดยการซื้อผ่านทางเว็บไซต์ ผู้ใช้บริการจะได้รับ Token หรือ License key 
                                        และนำ Key ดังกล่าวไปใส่ในสคริปเพื่อยืนยันการทำงานของสคริปต่อไป โดยระบบ License จะจัดการโดย API เขียนโดยใช้ภาษา <mark>PHP</mark> เป็น Backend 
                                        และหน้าเว็บไซต์จะใช้ <mark>Vue.JS,HTML,CSS</mark> ในการแสดงผล
                                    </p>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251683/851443744669564948/unknown.png" /><br></br>
                                    <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251683/851443769236127755/unknown.png" /><br></br>
                                    <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251683/851444201883041802/unknown.png" />
                                </div>
                                <div style={{
                                    borderBottom:'dashed 2px #ccc',
                                    width:'50%',
                                    marginRight:'auto',
                                    marginLeft:'auto',
                                    marginTop:'10px',
                                    marginBottom:'15px'
                                }}></div>
                                <div className={layoutStyle.subText}>CRUD สำหรับจัดการระบบ License
                                <br></br>
                                </div>
                                <div className={layoutStyle.divpProject}>
                                    <p className={layoutStyle.pProject}>
                                        เป็นเว็บ CRUD แบบง่ายๆ ใช้สำหรับการเพิ่มข้อมูล License ของผู้ใช้แบบ Manual ระหว่างทำการพัฒนาเว็บข้างต้น ที่พัฒนาโดย <mark>Vue.JS</mark> และ API 
                                        <br></br>เขียนโดยใช้ <mark>PHP</mark> และมีการเก็บข้อมูลโดยใช้ <mark>MySQL</mark>
                                    </p>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251683/851447136842547210/unknown.png" /><br></br>
                                </div>
                                <div style={{
                                    borderBottom:'dashed 2px #ccc',
                                    width:'50%',
                                    marginRight:'auto',
                                    marginLeft:'auto',
                                    marginTop:'10px',
                                    marginBottom:'15px'
                                }}></div>
                                <div className={layoutStyle.subText}>Salepage เว็บไซต์สำหรับขายสินค้า
                                <br></br>
                                <mark>
                                    <a href="https://sp-dev.xjoez.com/" target="_blank">Website</a>
                                </mark>
                                </div>
                                <div className={layoutStyle.divpProject}>
                                    <p className={layoutStyle.pProject}>
                                        เป็นเว็บไซต์ที่เกี่ยวทางด้าน E-Commerce โดยเว็บไซต์นี้ใช้ <mark>Vue.JS</mark> เข้ามาใช้ ในด้าน Frontend และใช้ <mark>PHP</mark> เป็น Backend 
                                        ซึ่งมีจุดประสงค์เพื่อศึกษาการเขียนภาษา PHP ทั้งการเขียนแบบ OOP และการเรียกใช้ฟังก์ชั่นต่างๆ และเว็บไซต์นี้มีการเชื่อมต่อกับ Database และเมื่อมีการสั่งสินค้าจะมีการแจ้งเตือนเข้าไปที่ Line Notify 
                                    </p>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251683/851455102585929738/unknown.png" /><br></br>
                                    <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251683/851455161376702504/unknown.png" /><br></br>
                                    <img className={layoutStyle.imgExample} src="https://cdn.discordapp.com/attachments/756089847940251683/851455206432571402/unknown.png" /><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="Projects" style={{marginTop:'10px'}}>
                        <div className={layoutStyle.HeaderTopic}>การศึกษา</div>
                        <div className="row" style={{
                            marginLeft:'5px',
                            marginRight:'5px',
                            borderBottom:"dashed 2px #CCCCCC",
                        }}>
                            <div className="col-xs-12" style={{textAlign:'center',marginBottom:'40px'}}>
                                <div className={layoutStyle.projectText} style={{
                                    width:'100%'
                                }}>
                                    - ระดับมหาวิทยาลัย -
                                </div>
                                <div className={layoutStyle.subText}>
                                <b>ปริญญาตรี</b>
                                <br></br>ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน
                                <br></br>เข้าศึกษาเมื่อปี 2560 - 2564
                                <br></br>เกรดรวม 3.13
                                </div>
                                <div className={layoutStyle.divpProject} style={{
                                    borderBottom:'dashed 2px #ccc',
                                    width:'50%',
                                    marginRight:'auto',
                                    marginLeft:'auto'
                                }}></div>
                            </div>
                            <div className="col-xs-12" style={{textAlign:'center',marginBottom:'40px'}}>
                                <div className={layoutStyle.projectText} style={{
                                    width:'100%'
                                }}>
                                    - ระดับมัธยม -
                                </div>
                                <div className={layoutStyle.subText}>
                                <b>มัธยมศึกษาปีที่ 1 - มัธยมศึกษาปีที่ 6</b>
                                <br></br>โรงเรียนสระบุรีวิทยาคม จังหวัดสระบุรี
                                <br></br>เข้าศึกษาเมื่อปี 2554 - 2560
                                <br></br>เกรดรวม 2.74
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="container" id="Skill" style={{marginTop:'10px',marginBottom:'15px'}}>
                        <div className={layoutStyle.HeaderTopic}>ทักษะต่างๆ</div>
                        <div className="row" style={{
                            marginLeft:'5px',
                            marginRight:'5px',
                            paddingBottom:'10px',
                            borderBottom:"dashed 2px #CCCCCC",
                        }}>
                            <div className="col-6" style={{
                                borderRight:'dashed 2px #ccc'
                            }}>
                                <div className={layoutStyle.skillText} style={{
                                    width:'100%',
                                    marginBottom:'10px'
                                }}>
                                    - Hard Skills -
                                </div>
                                <p className={layoutStyle.skillP}>
                                    HTML,CSS : ปานกลาง<br></br>
                                    JavaScript : ปานกลาง<br></br>
                                    Lua : ปานกลาง<br></br>
                                    Node.JS : พอใช้<br></br>
                                    PHP (Pure) : พอใช้<br></br>
                                    Bootstrap : พอใช้<br></br>
                                    MySQL : พอใช้<br></br>
                                    PHP (Codeigniter) : พื้นฐาน<br></br>
                                    jQuery,Ajax : พื้นฐาน<br></br>
                                    Python : พื้นฐาน<br></br>
                                    React : พื้นฐาน<br></br>
                                    Vue.JS : พื้นฐาน<br></br>
                                    Ino (Arduino) : พื้นฐาน<br></br>
                                </p>
                            </div>
                            <div className="col-6" style={{
                                
                            }}>
                                <div className={layoutStyle.skillText} style={{
                                    width:'100%',
                                    marginBottom:'10px'
                                }}>
                                    - Soft Skills -
                                </div>
                                <p className={layoutStyle.skillP}>
                                    การแก้ปัญหา : ดี<br></br>
                                    การจัดการเวลา : ดี<br></br>
                                    ความใฝ่รู้ : ดี<br></br>
                                    การเข้าสังคมและการปรับตัว : ดี<br></br>
                                    การทำงานเป็นทีม :ดี<br></br>
                                    การสื่อสาร : ดี<br></br>
                                    การจัดการอารมณ์ : ดี<br></br>
                                    ความใส่ใจ : ดี<br></br>
                                    การพัฒนาความคิด : ดี<br></br>
                                    ความเป็นผู้นำ : ปานกลาง<br></br>                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default MainContent;