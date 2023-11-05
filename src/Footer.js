import { useEffect } from "react"

export default function Footer()
{
    useEffect(()=>{
        document.getElementById('vid').play();
        document.getElementById('vid2').play();
    },[])
    return (
        <>
        <div className="">
        <div className="position-relative ">
            <div className="position-absolute">
            <video loop autoplay muted id="vid">
                <source src="production_id_4999945 (2160p).mp4" type="video/mp4"/>
            </video>
            </div>
            <div className="row  position-absolute" >
                    <div className="col-4 ">
                        <div className="row footerLogoarea pl-5 pr-5 pt-5">
                            <div className="col-12  ">
                                   <h3>DEEditsPAK</h3>
                            </div>
                            <div className="col-12">
                                <h2>
                                Passionate photographer with a keen 
                                eye for capturing moments and emotions
                                 through the lens. Specializing in portrait
                                 , landscape, and event photography, I
                                  strive to create timeless, visually 
                                  stunning images that tell a story
                                </h2>

                                <h1><a href="" className="text-success" style={{textDecoration:"Underline"}}>Our team</a></h1>   
                            </div>
                        </div>     
                    </div>
                    <div className="col-3  footerContact pt-5 pl-5 pr-5">
                           <h3>Contact</h3>
                           <h4><i class="fa fa-map-marker text-white pr-2" aria-hidden="true"></i> via Rossini 10, 10136 Italy</h4>
                           <h4><i class="fa fa-phone-square text-white pr-2" aria-hidden="true"></i> (0039)333 42 343</h4>
                           <h4><i class="fa fa-envelope text-white pr-2" aria-hidden="true"></i> hello@mail.com</h4>
                           <h4><i class="fa fa-skype text-white pr-2" aria-hidden="true"></i> you_online</h4>
                    </div>
                    <div className="col-5 ">
                    <video loop autoplay muted id="vid2">
                            <source src="production_id_4999945 (2160p).mp4" type="video/mp4"/>
                    </video>
                    </div>
                    <div className="col-12">
                        <div className="row fotterBottomArea ">
                                <div className="col-6 ">
                                        <h3 className="m-0">@All copyrights are reserved to <span>Vegeta</span></h3>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-3 ">
                                        <div className="row footericonsSize">
                                            <div className="col p-0 m-0"><i class="fa fa-facebook-official text-white" aria-hidden="true"></i></div>  
                                            <div className="col p-0 m-0"><i class="fa fa-twitter-square  text-white" aria-hidden="true"></i></div>  
                                            <div className="col p-0 m-0"><i class="fa fa-google-plus-square  text-white" aria-hidden="true"></i></div>
                                            <div className="col p-0 m-0"><i class="fa fa-instagram  text-white" aria-hidden="true"></i></div>
                                            <div className="col p-0 m-0"><i class="fa fa-pinterest-square  text-white" aria-hidden="true"></i></div>
                                        </div>
                                </div>
                        </div>
                    </div>
                   
                    
            </div>
        
      

        </div>
        </div>
        


           
        </>
    )
}