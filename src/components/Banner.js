import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>     
        <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <img loading="lazy" src= "https://www.lpu.in/images/home-slider/olympics-slide-1.jpg" alt="" />
            </div>

            <div>
            <img loading="lazy" src= "https://i.ibb.co/qkBPC69/1515755514-mg-0071.jpg" alt="" />
            </div>
                
            <div>
            <img loading="lazy" src= "https://indiangroceryvictoria.com/groceryapp/wp-content/uploads/2018/06/7-2-1024x407.jpg" alt="" />
            </div>
                
            
        </Carousel>
        </div>
    )
}

export default Banner
