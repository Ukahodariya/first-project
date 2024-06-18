import './herobanner.scss'
import Imgone from '../../../assets/image/left-top.png'
import Imgtwo from '../../../assets/image/btn.png'
import Imgthree from '../../../assets/image/mask.png'
import Imgfour from '../../../assets/image/character1.png'
import Imgfive from '../../../assets/image/character2.png'
export default function Herobanner() {
    return (
        <div className="herobanner">
            <div>
                <div className='herobanner-blur-top-right'></div>
                <div className='herobanner-blur-top-left'></div>
                <div className='herobanner-blur-bottom-left'></div>
                <div className='herobanner-blur-bottom-right'></div>
            </div>
            <div className='container'>
            <div className='herobanner-rigth-image'></div>
                <div className='herobanner-grid'>
                    <div className='herobanner-left-section'>
                        <div className='herobanner-left-section-one'>
                            <img src={Imgone}/>
                        </div>
                        <div className='herobanner-left-section-two'>
                            <h1>If you're reading this you're still alive. Life is short! Do something fun!</h1>
                        </div>
                        <div className='herobanner-left-section-three'>
                            <button><span>Begin! Do something fun</span><img src={Imgtwo}></img></button>
                        </div>
                        <div className='herobanner-left-section-four'>
                            <img src={Imgthree}/>
                        </div>
                    </div>
                    <div>
                        <div className='herobanner-right-flex'>
                            <div className='herobanner-right-img-one'>
                                <img src={Imgfour}></img>
                            </div>
                            <div className='herobanner-right-img-two'>
                                <img src={Imgfive}></img>
                            </div>
                            <div className='herobanner-right-img-three'></div>
                            <div className='herobanner-right-img-four'></div>
                            <div className='herobanner-right-img-five'></div>
                            <div className='herobanner-right-img-six'></div>
                            <div className='herobanner-right-img-seven'></div>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}