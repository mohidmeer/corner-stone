import {BsFacebook, BsFillClockFill, BsFillTelephoneFill, BsTwitter, BsYoutube} from  'react-icons/bs'
import {AiFillBuild, AiFillHome} from  'react-icons/ai'
import Link from 'next/link';

export default function TopBar(){

    return (
        <div className="p-2">
            <div className="max-w-6xl  mx-auto flex  items-center">
                <Logo/>
                <div className=' hidden sm:flex flex-wrap p-4 gap-4 ml-auto cursor-pointer font-popin '>
                    <div className='flex items-center gap-2'>
                        <BsFillClockFill size={32} className='text-primary'/>
                        <div>
                            <p className='text-xs font-bold '>MONDAY to FRIDAY  -  OPENED</p>
                            <p className='text-muted text-xs'>Saturday & Sunday - CLOSED</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsFillTelephoneFill size={32} className='text-primary'/>
                        <div>
                            <p className='text-xs font-bold '>+ 0800 2466 7921</p>
                            <p className='text-muted text-xs'>cornerstone@qode.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiFillHome size={32} className='text-primary'/>
                        <div>
                            <p className='text-xs font-bold '>34TH AVENUE</p>
                            <p className='text-muted text-xs'>New York, W2 3XE</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-blue-400 duration-500 transition-all '>
                            <BsTwitter className='text-muted group-hover:text-blue-400 duration-500 transition-all'/>
                        </Link>
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-blue-600 duration-500 transition-all '>
                            <BsFacebook className='text-muted group-hover:text-blue-600 duration-500 transition-all'/>
                        </Link>
                        <Link href={''} className='p-2 border-2 border-dashed group hover:border-red-600 duration-500 transition-all '>
                            <BsYoutube className='text-muted group-hover:text-red-600 duration-500 transition-all'/>
                        </Link>
                    </div>
                    

                </div>

            </div>
        </div>
    );
}


function Logo(){
    return (
        <div className="flex flex-col justify-center items-center bg-white p-4 ">
            <AiFillBuild size={32} className='text-primary'/>
            <h5 className='font-extrabold sm:block hidden whitespace-nowrap'>Host Building Group</h5>

        </div>
    );
}