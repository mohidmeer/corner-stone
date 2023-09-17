import { Swiper, SwiperSlide } from 'swiper/react';
import img from '@/public/assets/images/project/img-1.jpg'
import img2 from '@/public/assets/images/project/img-2.jpg'
import img3 from '@/public/assets/images/project/img-3.jpg'
import client from '@/public/assets/images/clients/client-1.png'
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Goal(){

    return (
        <>
        <div className="text-white relative bg-parallax   ">
            <div className="mx-auto max-w-6xl  ">
                <div className="py-16">
                    <div className=" flex flex-col gap-4">
                        <h3 className="text-center">OUR GOAL THEN AND NOW IS TO PROVIDE <br/> QUALITY ON TIME PROJECTS.</h3>
                        <p className="text-center max-w-3xl mx-auto">Lorem ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet morbi accumsan ipsum</p>
                    </div>
                </div>
            </div>
            <Slider/>
        </div>
       <Companies/>
        
        </>

    );
}


function Slider(){

    return(
        <div className='my-10'>
            <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => ('')}
                    onSwiper={(swiper) => console.log(swiper)}>
                   
                            <SwiperSlide  >
                                
                                    <Slide i={img}  />
                           
                            </SwiperSlide>
                            <SwiperSlide >
                                <Slide i={img2}  />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Slide i={img3}  />
                            </SwiperSlide>
                            <SwiperSlide  >
                                <Slide i={img}  />
                            </SwiperSlide>
                            <SwiperSlide  >
                                <Slide i={img}  />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Slide i={img2}  />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Slide i={img3}  />
                            </SwiperSlide>
                            <SwiperSlide  >
                                <Slide i={img}  />
                            </SwiperSlide>
                </Swiper>
          

        </div>
    )
}


function Slide({i}) {
    return (
            <div className='w-full relative h-[40vh] '>
                <Image src={i} fill alt='hero-img' className='object-cover ' />
            </div>  
    );
}

function Companies(){
    return (
        <div className='my-16'>
            <h3 className='text-center p-10'>OUR PARTENERS</h3>
            <div className='mx-auto max-w-6xl grid md:grid-cols-4 gap-6'>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}

function Item(){

    return (
        <div className='cm-shadow cursor-pointer bg-white hover:bg-[#f0f0f0] border-2 border-dashed border-transparent hover:border-[#bababa]'>
            <Image src={client} alt='clients'/>
        </div>
    );
}