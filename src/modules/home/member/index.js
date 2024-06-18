import './member.scss'
import Imgone from '../../../assets/image/sound.png'
import Logoone from '../../../assets/logo/idk.png'
import Logotwo from '../../../assets/logo/insta.png'
import Logothree from '../../../assets/logo/fb.png'
import Logofour from '../../../assets/logo/x.png'
import Logofive from '../../../assets/logo/linkdin.png'
export default function Member() {
    return (
        <div className="member">
            <div className="container">
                <div className="member-text-section">
                    <h1>Share with your friends and move up the waiting list!</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim</p>
                </div>
                <div className='member-card-section-top'>
                    <div className='member-card-section-top-one'>
                        <div className='member-card-section-one'>
                            <div className='member-card-main'>
                                <img src={Imgone}></img>
                                <p>Tell your friends today!</p>
                            </div>
                        </div>
                        <div className='member-card-section-bottom'>
                            <div className='member-card-section-two'>
                                <div className='member-card-bottom'>
                                    <img src={Logoone}></img>
                                    <img src={Logotwo}></img>
                                    <img src={Logothree}></img>
                                    <img src={Logofour}></img>
                                    <img src={Logofive} className='img'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='member-info'>
                    <div className='member-info-text'>
                        <p>5632</p>
                        <span>total waitlist members</span>
                    </div>
                    <div className='member-info-text'>
                        <p>5632</p>
                        <span>your place on the line</span>
                    </div>
                    <div className='member-info-text'>
                        <p>12</p>
                        <span>points earned</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}