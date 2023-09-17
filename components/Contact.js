import Image from "next/image";
import img from '@/public/assets/images/slide-5.jpg'

export default function Contact(){

    return (
        <div className="my-32">
            <div className="max-w-6xl mx-auto text-secondary">
                <div className="flex gap-8 ">
                    <div className="w-full flex flex-col gap-8">
                        <h4>BUILDING THINGS</h4>
                        <p className="text-light text-xl" >Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit auctor aliquetenean sollicitudin</p>
                        <p className="text-sm text-light">Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare oed non  mauris</p>
                        <button className="btn w-fit">CONTACT US</button>
                    </div>
                    <div className="w-full relative ">
                        <Image src={img} alt="company" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}