import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featurdImg from '../../../assets/home/featured.jpg'
import './FeatuedItems.css'

const FeaturedItems = () => {
    const [date, setDate] = useState(new Date().getDate())
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth())

    return (
        <div className="featuredBackground bg-fixed bg-cover bg-opacity-70 inset-0 mb-20 pt-4 pb-6 text-white">
            <SectionTitle heading='from our menu' subHeading='check it out'></SectionTitle>
            <div className="bg-opcity-20 flex justify-center items-center pb-10 px-36 gap-10">
                <div>
                    <img src={featurdImg} alt="" className="" />
                </div>
                <div>
                    <h2>{date}-{month}-{year}</h2>
                    <h1 className="uppercase">Where can get some?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A facere tenetur illo dolorem corrupti natus ratione dolore. Nisi qui aperiam rem odio ex sint nemo, ipsum illo eaque dolores doloremque deleniti corrupti officiis! Aliquam pariatur nam exercitationem eaque inventore cupiditate saepe nemo fugiat dolorem ipsum totam, magnam dolore quibusdam molestiae.</p>
                    <button className="border-0 border-b-4 btn-outline text-white px-5 py-2">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;