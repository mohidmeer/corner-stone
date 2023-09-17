import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '@/public/assets/images/project/img-1.jpg'
import img2 from '@/public/assets/images/project/img-2.jpg'
import img3 from '@/public/assets/images/project/img-3.jpg'
import img4 from '@/public/assets/images/slide-4.jpg'
import img5 from '@/public/assets/images/slide-5.jpg'
import Image from 'next/image';
import {SlCalender} from 'react-icons/sl'
import {AiOutlineShareAlt} from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function Blog(){
    return (
        <div className="bg-[#ededed] py-16">
            <div className="mx-auto max-w-6xl">
                <h3 className='text-center text-secondary'>FROM OUR BLOG</h3>
                <Slider/>
            </div>
        </div>
    );
}

function Slider(){

    return(
        <div className='my-10'>
            <Swiper
                    breakpoints={{
                        200:{
                            slidesPerView:1,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => ('')}
                    onSwiper={(swiper) => console.log(swiper)}>
                   
                            <SwiperSlide>
                                <Slide i={img}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img2}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img3}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img4}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img5}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img3}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img2}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img4}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img3}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img5}  />
                            </SwiperSlide>
                           
                </Swiper>
          

        </div>
    )
}


function Slide({i}) {
    return (
        <div className="bg-white ">
        <div className='w-full h-60 border relative overflow-hidden'>
            <Image src={i} fill className='object-cover hover:scale-110 duration-300 hover:brightness-75  '  alt='machine' />
        </div>
        <div className='p-6  flex flex-col gap-4 cursor-pointer '>
            <p className=' text-xl font-bold text-secondary hover:text-primary duration-300'>BUILDING ON YOUR PRIORITIES</p>
            <p className='text-sm text-light leading-7  '>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed amet nibh vulputate.</p>
        </div>
        <div className='border-t-2 border-dashed  flex justify-between items-center p-4 text-light'>
            <div className='flex items-center gap-2  font-popin text-sm font-bold'>
                <SlCalender size={24} className=''/>
                <p className='mt-1'>23.3.12</p>
            </div>
            <div className='group relative'>
                <AiOutlineShareAlt size={24} className='cursor-pointer '/>
                <div className='absolute right-5 bottom-0 h-0 group-hover:h-[150px] duration-300  '>
                    <div className='flex-col group-hover:flex gap-1 bg-white p-1 hidden ' >
                        <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2'>
                            <FaFacebook className='text-[#1877F2]'/>
                            <p className='text-xs font-bold'>FACEBOOK</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2'>
                            <FaTwitter className='text-[#00acee]'/>
                            <p className='text-xs font-bold uppercase'>Twitter</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2'>
                            <FaInstagram className='text-[#8a3ab9]'/>
                            <p className='text-xs font-bold'>INSTAGRAM</p>
                        </div>
                       
                    </div>

                </div>
            </div>


        </div>
    </div>
    );
}
