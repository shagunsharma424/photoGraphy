import { useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";
export default function Home()
{
 
    return(
        <>
        <div className="position-realtive w-100" >   
                    <div className="carouselClass">
                                    <Carousel slide={false} controls={false}  indicators={false}>
                                    <Carousel.Item interval={3000}>
                                    <img className="d-block w-100 HomeStartVideo" src="pexels-aleksandar-pasaric-325185.jpg" alt="First slide" ></img>
                                        
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>

                                    <img className="d-block w-100 HomeStartVideo" src="pexels-aleksandar-pasaric-3629227.jpg" alt="First slide" ></img>
                        
                                    </Carousel.Item >
                                </Carousel>
                    </div>
                    <div className="carouselMainText ">
                                <h1 className="animate__heartBeat animate__animated text-dark ">DEEPAK EDITS</h1>
                                <h5>Legenday Photographer</h5>
                    </div>
                    
        </div>

        <div className="row  mb-5 justify-content-center">
                <div className="col-4 d-flex justify-content-center">
                        <div className=" HomeImages1">
                            <h4 className="text-left">01</h4>
                            <img src="https://static.wixstatic.com/media/f61af8_1379b994501a4f58ac9f59cef18a8a54~mv2_d_4608_2592_s_4_2.jpg/v1/fill/w_451,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_1379b994501a4f58ac9f59cef18a8a54~mv2_d_4608_2592_s_4_2.jpg" ></img>
                            <h3>The Desert</h3>
                            <h5>See More</h5>
                        </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4  d-flex justify-content-center">
                        <div className=" HomeImages2">
                            <h4 className="text-left">02</h4>
                            <img src="https://static.wixstatic.com/media/f61af8_caad3497b6e141b1936e12fc3ae19e3c~mv2_d_3791_5686_s_4_2.jpg/v1/fill/w_450,h_610,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_caad3497b6e141b1936e12fc3ae19e3c~mv2_d_3791_5686_s_4_2.jpg" ></img>
                            <h3>High Sierra</h3>
                            <h5>See More</h5>
                        </div>
                </div>
               
              
                <div className="col-4  d-flex justify-content-center">
                        <div className=" HomeImages2">
                            <h4 className="text-left">03</h4>
                            <img src="https://static.wixstatic.com/media/f61af8_352a130c59234ca791f1a813f9bc7a67~mv2_d_3840_5073_s_4_2.jpg/v1/fill/w_502,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_352a130c59234ca791f1a813f9bc7a67~mv2_d_3840_5073_s_4_2.jpg" ></img>
                            <h3>Beach</h3>
                            <h5>See More</h5>
                        </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4 d-flex justify-content-center">
                        <div className=" HomeImages1">
                            <h4 className="text-left">04</h4>
                            <img src="https://static.wixstatic.com/media/f61af8_1379b994501a4f58ac9f59cef18a8a54~mv2_d_4608_2592_s_4_2.jpg/v1/fill/w_451,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_1379b994501a4f58ac9f59cef18a8a54~mv2_d_4608_2592_s_4_2.jpghttps://static.wixstatic.com/media/f61af8_a3f4b4ad01ff4b53974cf5be60ba605a~mv2_d_3655_3991_s_4_2.jpg/v1/fill/w_409,h_437,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_a3f4b4ad01ff4b53974cf5be60ba605a~mv2_d_3655_3991_s_4_2.jpg" ></img>
                            <h3>Forests Wilderness</h3>
                            <h5>See More</h5>
                        </div>
                </div>
        </div>

           
        <Footer></Footer>
                 
        </>
    )
}