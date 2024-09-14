import {React,useState,useEffect} from 'react'
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';
function FreeBook() {
    // const filderData=list.filter((data)=>data.category==="free");
    const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const ress=await axios.get("http://localhost:3000/book")
       const dataa=ress.data.filter((data)=>data.category==="free")
      //  console.log(dataa)
       setBook(dataa)
      } catch (error) {
        console.log("eror: "+error)
      }
    }
    getBook();
  },[])

        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 p-5'>
        <div>
        <h1 className='font-bold text-2xl'>Free Course Offered</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis libero cupiditate dolor doloribus consequatur! Laudantium voluptate veniam eaque reiciendis maiores perspiciatis? Veniam asperiores quas possimus rem modi reprehenderit aliquam sequi obcaecati expedita culpa? Est vero veritatis odio quia eius quam, voluptate voluptatibus quos iusto vitae deleniti quas totam rem!</p>
        </div>
        <div>
        <Slider {...settings}>
            {
                book.map((item)=>{
                    return(
                      <Cards  key={item.id} item={item}/>
                    )
                })
            }
        </Slider>
        </div>
    </div>
    
      {/* <div className='container mx-auto'>
        
    </div> */}
    </>
  )
}

export default FreeBook
