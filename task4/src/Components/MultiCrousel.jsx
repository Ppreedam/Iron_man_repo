
import { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux"
import { getData } from '../Redux/Appreducer/action';
import "./MUltiCrousel.css"


const MultiCrousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const dispatch = useDispatch()
    const data = useSelector((store) => store.Appreducer?.product?.products)
    console.log(data)


    useEffect(() => {
        dispatch(getData())
    }, [])
    // console.log(data)


    return (
        <>
            <div className='crouselmainbox'>
                <Carousel
                    transitionDuration={500}
                    // autoPlay={this.props.deviceType !== "desktop" ? true : false}
                    responsive={responsive}>

                    {

                        data.map((item) => {
                            return (
                                <div className='multicrousel'>
                                    <img className='img' src={item.thumbnail} alt="" />
                                    <p><strong>{item.title}</strong></p>
                                    <p>Price:-{item.price}</p>

                                </div>
                            )
                        })
                    }

                </Carousel>;

            </div>


        </>
    )

}

export default MultiCrousel