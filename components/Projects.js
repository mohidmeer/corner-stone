import slide3 from '@/public/assets/images/slide-3.jpg';
import slide4 from '@/public/assets/images/slide-5.jpg';
import Image from 'next/image';
import { useState } from 'react';

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {FaTools} from 'react-icons/fa';

export default function Projects(){

    return (
        <div>
            <div className="max-w-6xl mx-auto my-16 font-popin">
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className='w-full h-60 border relative overflow-hidden'>
                            <Image src={slide3} fill className='object-cover hover:scale-110 duration-300  '  alt='machine' />
                        </div>
                        <p className=' text-sm font-semibold text-secondary'>ENGINEERING YOUR DREAMS WITH OUR TEAM.</p>
                        <p className='text-sm text-light'>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed amet nibh vulputate.</p>
                        <p className='font-bold text-primary flex  flex-col  max-w-fit group cursor-pointer '>
                            Read More
                            <span className='border-t-4 inline-block w-0 group-hover:w-full duration-300 border-primary '></span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='w-full h-60 border relative overflow-hidden'>
                            <Image src={slide4} fill className='object-cover hover:scale-110 duration-300 '  alt='machine'/>
                        </div>
                        <p className=' text-sm font-semibold text-secondary'>CAREFUL THOUGHT. HAND-CRAFTED DESIGN.</p>
                        <p className='text-sm text-light'>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed amet nibh vulputate.</p>
                        <p className='font-bold text-primary flex  flex-col  max-w-fit group cursor-pointer '>
                            Read More
                            <span className='border-t-4 inline-block w-0 group-hover:w-full duration-300 border-primary '></span>
                        </p>
                    </div>
                    <Accordian/>

                </div>

            </div>
        </div>
    )
}




const AccordianData = [
    {
        id:1,
        title:'Superior Quality and results',
        text:'Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed.',
        icon: (classname)=>(<FaTools className={classname}/>)
    },
    {
        id:2,
        title:'Built with excellence',
        text:'Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed.',
        icon: (classname)=>(<FaTools className={classname}/>)
    },
    {
        id:3,
        title:'A tradition of success',
        text:'Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed.',
        icon: (classname)=>(<FaTools className={classname}/>)
    },
    {
        id:4,
        title:'Remodelling Expert',
        text:'Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed.',
        icon: (classname)=>(<FaTools className={classname}/>)
    },
]




function Accordian(){

    const [activeAccordian,setActiveAccordian] = useState(1)

    return (
        <div className='w-full flex flex-col gap-2'>
            {AccordianData.map((d)=>(
                <div key={d.id} className='cursor-pointer' onClick={()=>setActiveAccordian(d.id)} >
                <div className={`flex items-center gap-4 p-4  ${activeAccordian==d.id  ? '!bg-secondary text-white' : 'bg-[#f0f0f0] text-secondary '}  `}>
                    {d.icon(activeAccordian==d.id  && 'text-primary ' )}
                    <p className='text-sm font-bold'>{d.title.toLocaleUpperCase()}</p>
                    <div className='ml-auto'>
                        {activeAccordian==d.id ? <AiOutlineMinus/>   : <AiOutlinePlus onClick={()=>setActiveAccordian(d.id)}/>}
                    </div>
                </div>
                <div className={`h-0 overflow-hidden duration-300 ${activeAccordian==d.id && 'px-4 py-10 h-40 '}`}>
                    <p className={`text-light text-sm  `}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed.</p>
                    <p className='font-bold text-primary flex  flex-col  max-w-fit group cursor-pointer '>
                        Read More
                    <span className='border-t-4 inline-block w-0 group-hover:w-full duration-300 border-primary '></span>
                    </p>
                </div>

            </div>
            ))}
            
            

        </div>
    )
}