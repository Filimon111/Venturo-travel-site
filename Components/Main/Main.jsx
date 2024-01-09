import React, {useEffect} from "react";
import './main.css'

import {GrLocation} from 'react-icons/gr';
import {HiOutlineClipboardCheck} from 'react-icons/hi';
import img from '../../media/img.jpg';
import img_2 from '../../media/img_2.jpg';
import img_3 from '../../media/img_3.jpg';
import img_4 from '../../media/img_4.jpg';
import img_5 from '../../media/img_5.jpg';
import img_6 from '../../media/img_6.jpg';
import img_7 from '../../media/img_7.jpg';
import img_8 from '../../media/img_8.jpg';
import img_9 from '../../media/img_9.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$2000',
        description: `Nestled in the stunning landscapes of New Zealand, Bora Bora offers a perfect
         blend of natural beauty and adventure. With its pristine beaches, lush tropical forests, and 
         crystal-clear waters, this enchanting location is a paradise for beach lovers and nature enthusiasts.`
    },

    {
        id: 2,
        imgSrc: img_2,
        destTitle: 'Machu Pichu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$1500',
        description: `Its stunning architecture, breathtaking natural surroundings, and rich heritage
         make it a must-visit. Hike the Inca Trail or take a scenic train ride to this UNESCO World Heritage 
         Site, but plan ahead due to visitor restrictions. Machu Picchu's magic awaits those seeking an
        unforgettable adventure.`
        },

    {
        id: 3,
        imgSrc: img_3,
        destTitle: 'Santorini',
        location: 'Greece',
        grade: 'CULTURAL RELAX',
        fees: '$2500',
        description: `Relax on stunning beaches, savor delectable Mediterranean cuisine,
         and witness breathtaking sunsets in Oia. Santorini is a dreamlike escape for those 
         seeking romance and beauty in every corner of this charming island.`
    },

    {
        id: 4,
        imgSrc: img_4,
        destTitle: 'Kyoto',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '$2800',
        description: `Stroll through enchanting bamboo forests in Arashiyama, explore stunning Shinto shrines, and 
        immerse yourself in the art of the traditional tea ceremony. In spring, cherry blossoms transform the city into a
         fairy tale. With its timeless charm and historical significance, Kyoto offers a serene and captivating escape into 
         Japan's rich heritage.`
    },

    {
        id: 5,
        imgSrc: img_5,
        destTitle: 'Banff National Park',
        location: 'Canada',
        grade: 'CULTURAL RELAX',
        fees: '$2500',
        description: `A natural wonderland with crystal-clear lakes, towering mountains, and abundant wildlife.
        Opportunities for hiking, skiing, and exploring the Canadian Rockies.`
    },

    {
        id: 6,
        imgSrc: img_6,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$2000',
        description: `Commissioned by Emperor Shah Jahan in memory of his wife, this stunning white marble mausoleum 
        boasts intricate detailing and an ethereal glow. Visiting the Taj Mahal offers a chance to witness its timeless
         elegance and to experience the deep emotions it represents—a journey into the heart of history and love.`
    },

    {
        id: 7,
        imgSrc: img_7,
        destTitle: 'Hawaii',
        location: 'United States of America',
        grade: 'CULTURAL RELAX',
        fees: '$3500',
        description: `Hawaii, a tropical archipelago in the heart of the Pacific Ocean, is the epitome of paradise. With its 
        lush landscapes, stunning beaches, and a vibrant Polynesian culture, Hawaii offers a unique blend of relaxation and adventure. 
        Visit volcanic wonders in Hawaii Volcanoes National Park, surf on the North Shore of Oahu, or simply unwind on the pristine shores. 
        Whether you seek natural beauty, outdoor activities, or a taste of aloha spirit, Hawaii has it all.`
    },

    {
        id: 8,
        imgSrc: img_8,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$3000',
        description: `Bali has captured the hearts of travelers worldwide. Immerse yourself in rich Balinese 
        traditions, explore ancient temples, and savor world-class cuisine. Whether you're seeking tranquil moments
         in Ubud, thrilling waves in Kuta, or spiritual experiences at Uluwatu, Bali offers a diverse and enchanting
          escape for every traveler.`
    },

    {
        id: 9,
        imgSrc: img_9,
        destTitle: 'Park Güell',
        location: 'Barcelona',
        grade: 'CULTURAL RELAX',
        fees: '$2300',
        description: `This UNESCO World Heritage Site boasts vibrant mosaics, undulating architectural designs, and an
         enchanting dragon sculpture guarding the entrance. Wander through the park's mosaic-covered benches, marvel at the
          unique architecture, and soak in panoramic views of the city. Park Güell is a must-visit for those seeking a dose 
          of artistic brilliance and imaginative design in the heart of Barcelona.`
    },

]
const Main = () => {

        useEffect(() =>{
            Aos.init({duration: 2000})
        }, []);


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                
                {
                
                Data.map(({id, imgSrc, destTitle, location, grade, fees, 
                description}) => {
                    return (
                        <div key={id} data-aos="fade-up" className="singleDestination">

                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">
                                    {destTitle}
                                </h4>
                                <span className="continent flex">
                                    <GrLocation className="icon" />
                                    <span className="name">{location}</span>
                                </span>
                            

                            <div className="fees flex">
                            
                                <div className="grade">
             
                                    <span>{grade}<small>+1</small></span>
                                </div>

                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                                 
                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                DETAILS <HiOutlineClipboardCheck className="icon" />
                            </button>


                        </div>
                    </div>
                    
                    )
                })
                
            }

                


            </div>
        </section>
    )
}

export default Main;