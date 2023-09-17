import Image from "next/image";

import img from '@/public/assets/images/price.jpg'

export default function Pricing(){
    return(
        <div className="py-20 bg-[#f3f3f3] text-secondary">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-4">
                    <h3 className="text-center">PRICING PLANS</h3>
                    <p className="text-center text-xl md:w-2/3 mx-auto text-light ">Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 my-14">
                    <div className="bg-white group">
                        <div className="flex justify-center">
                            <div className="border-t-4 border-primary w-0 group-hover:w-full duration-300"></div>
                        </div>
                        <div className=" p-10 text-center">
                            <h1 className="mb-6" >33<span className="text-xl text-primary">$</span> </h1>
                            <h4>BUSINESS</h4>
                            <p className="font-bold">PER MONTH</p>
                            <div className="my-6 flex flex-col text-light gap-4">
                                <p>4 Specialties</p>
                                <p>30 Tests and Treatments</p>
                                <p>1 Time a Year</p>
                            </div>
                            <button className="btn w-fit text-sm">PURCHASE</button>
                        </div>
                        <div className="flex justify-center">
                            <div className="border-t-4 border-primary w-0 group-hover:w-full duration-300"></div>
                        </div>
                    </div>
                    <div className="bg-white group relative z-0 text-white overflow-hidden">
                        <Image src={img} alt="plans" fill className="object-cover -z-10 group-hover:scale-110 duration-300 " />
                        <div className="flex justify-center">
                            <div className="border-t-4 border-primary w-0 group-hover:w-full duration-300"></div>
                        </div>
                        <div className=" p-10 text-center ">
                            <h1 className="mb-6 z-10 " >100<span className="text-xl text-primary">$</span> </h1>
                            <h4>BUSINESS</h4>
                            <p className="font-bold">PER MONTH</p>
                            <div className="my-6 flex flex-col text-white gap-4">
                                <p>4 Specialties</p>
                                <p>30 Tests and Treatments</p>
                                <p>1 Time a Year</p>
                            </div>
                            <button className="btn w-fit text-sm">PURCHASE</button>
                        </div>
                        <div className="flex justify-center">
                            <div className="border-t-4 border-primary w-0 group-hover:w-full duration-300"></div>
                        </div>
                    </div>
                    <div className="bg-white group">
                        <div className="flex justify-center">
                            <div className="border-t-4 border-primary w-0 group-hover:w-full duration-300"></div>
                        </div>
                        <div className=" p-10 text-center">
                            <h1 className="mb-6" >200<span className="text-xl text-primary">$</span> </h1>
                            <h4>BUSINESS</h4>
                            <p className="font-bold">PER MONTH</p>
                            <div className="my-6 flex flex-col text-light gap-4">
                                <p>4 Specialties</p>
                                <p>30 Tests and Treatments</p>
                                <p>1 Time a Year</p>
                            </div>
                            <button className="btn w-fit text-sm">PURCHASE</button>
                        </div>
                        <div className="flex justify-center">
                            <div className="border-t-4 border-primary w-0 group-hover:w-full duration-300"></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
}
