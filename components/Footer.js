import Image from "next/image"
import Link from "next/link"
import { AiFillBuild, AiFillCalendar, AiFillMail } from "react-icons/ai"
import { BsFacebook, BsFillTelephoneFill, BsMailbox, BsTwitter, BsYoutube } from "react-icons/bs"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import img from "@/public/assets/images/news.jpg"
import { SlCalender } from "react-icons/sl"

export default function Footer(){

    return (
        <div className="bg-[#2a2a2a] text-white">
            <div className="">

                <div className="grid md:grid-cols-4 gap-14 py-16 mx-auto max-w-6xl ">
                    <div className="flex flex-col">
                        <Logo/>
                        <p className="text-muted text-sm mt-6">Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliqunean sollicitudinlorem quis bibendum auci elit consequat ipsutis sem nibh id elit duis sed.</p>
                        <Link href={'tel:0333333'} className="flex items-center gap-1 hover:text-primary duration-300 justify-start mt-6 font-popin">
                            <BsFillTelephoneFill/>
                            <p>1-677-124-44227</p>
                        </Link>
                        <Link href={'tel:0333333'} className="flex items-center gap-1 hover:text-primary duration-300 justify-start font-popin">
                            <AiFillMail/>
                            <p>hostbuilding@gmail.com</p>
                        </Link>

                    </div>
                    <div>
                        <h5 className="mt-12">LATEST NEWS</h5>
                        <News/>
                    </div>
                    <div className="">
                        <h5 className="mt-12">INSTAGRAM</h5>
                        <Insta/>
                    </div>
                    <div className="">
                        <h5 className="mt-12 whitespace-nowrap">SUBSCRIBE TO NEWSLETTER</h5>
                        <p className="mt-4 text-muted">Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliqunean sollicitudinlorem quis bibendum.</p>
                        <div className="mt-4 flex ">
                            <input placeholder="Email" className="bg-transparent border-t border-b border-l py-2 focus:border-trasnparent"></input>
                            <button className="btn !rounded-none">SUBSCRIBE</button>
                        </div>
                    </div>
                    
                </div>
                <Foot/>
            </div>
        </div>
    )
}

function Foot(){
    return(
        <div className=" p-3 bg-[#383838] ">
                <div className="mx-auto max-w-6xl flex items-center justify-between">
                <p>Copyright © 2020 All Rights Reserved by Hostbuilding Group.</p>
                <div className='flex items-center gap-4'>
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-[#1877F2] duration-500 transition-all '>
                            <BsFacebook className='text-muted group-hover:text-[#1877F2] duration-500 transition-all'/>
                        </Link>
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-[#00acee] duration-500 transition-all '>
                            <BsTwitter className='text-muted group-hover:text-[#00acee] duration-500 transition-all'/>
                        </Link>
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-[#0077b5] duration-500 transition-all '>
                            <FaLinkedin className='text-muted group-hover:text-[#0077b5] duration-500 transition-all'/>
                        </Link>
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-[#8a3ab9] duration-500 transition-all '>
                            <FaInstagram className='text-muted group-hover:text-[#8a3ab9] duration-500 transition-all'/>
                        </Link>
                        
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-red-600 duration-500 transition-all '>
                            <BsYoutube className='text-muted group-hover:text-red-600 duration-500 transition-all'/>
                        </Link>
                    </div>
                </div>

            </div>
    )
}

function Logo(){
    return (
        <div className="flex flex-col justify-start items-center">
            <AiFillBuild size={50} className='text-primary mr-20'/>
           
            <h5 className='font-extrabold sm:block hidden whitespace-nowrap text-white mr-auto'>Host Building Group</h5>

        </div>
    );
}

function News(){
    return(
        <div className=" flex flex-col gap-4 mt-6 cursor-pointer">
            <div className="flex items-center gap-4">
                <Image src={img}  alt="source" width={50} />
                <div className="font-popin">
                    <p className="text-xs">PRINT YOUR HOME TODAY</p>
                    <p className="text-sm gap-2 mt-1 flex items-center text-muted">
                        <SlCalender/> 23.09.24
                    </p>
                </div>
           </div>
            <div className="flex items-center gap-4">
                <Image src={img}  alt="source" width={50} />
                <div className="font-popin">
                    <p className="text-xs">PRINT YOUR HOME TODAY</p>
                    <p className="text-sm gap-2 mt-1 flex items-center text-muted">
                        <SlCalender/> 23.09.24
                    </p>
                </div>
           </div>
            <div className="flex items-center gap-4">
                <Image src={img}  alt="source" width={50} />
                <div className="font-popin">
                    <p className="text-xs">PRINT YOUR HOME TODAY</p>
                    <p className="text-sm gap-2 mt-1 flex items-center text-muted">
                        <SlCalender/> 23.09.24
                    </p>
                </div>
           </div>
              
        </div>
    )
}

function Insta(){

    return (
        <div className="grid grid-cols-3 gap-2 mt-6 cursor-pointer">
            <div>
                <Image src={img} alt="insta-img"/>
            </div>
            <div>
                <Image src={img} alt="insta-img"/>
            </div>
            <div>
                <Image src={img} alt="insta-img"/>
            </div>
            <div>
                <Image src={img} alt="insta-img"/>
            </div>
            <div>
                <Image src={img} alt="insta-img"/>
            </div>
            <div>
                <Image src={img} alt="insta-img"/>
            </div>

        </div>
    )
}