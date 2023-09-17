import { SwiperSlide,Swiper } from "swiper/react";
import { Autoplay,Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from '@/public/assets/images/testimonials/testimonials-1.png';
import Image from "next/image";
export default function Testimonials(){
    return(
        <div className="bg-secondary py-20 text-white">
            <div className="mx-auto max-w-6xl">
                <h3 className="text-center">TESTIMONIALS</h3>
                <Slider/>
            </div>
        </div>
    )
}

function Slider(){

    return(
        <div className='my-10'>
            <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    
                    loop={true}
                    navigation={true}
                   
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,Navigation, Pagination]}
                    onSlideChange={() => ('')}
                    onSwiper={(swiper) => console.log(swiper)}>
                   
                            <SwiperSlide>
                                <Slide i={img}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img}  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide i={img}  />
                            </SwiperSlide>
                           
                </Swiper>
          

        </div>
    )
}


function Slide({i}) {
    return (
        <div className="flex flex-col gap-8 items-center justify-center text-center px-32">
            <Image src={i} alt="person"/>
        <h4 className="font-normal">From complete turn key to project manager. Leave the building to the professionals. Masters of Consistency and Quality.</h4>
        <div>
            <h4 className="font-extrabold">Stuart Steinberg</h4>
            <h4 className="font-normal">CEO</h4>
        </div>

       </div>
    );
}
