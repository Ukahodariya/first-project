import './job.scss';
import Imgone from '../../../assets/image/job.png'
import Imgtwo from '../../../assets/image/job-right.png'
import Imgthree from '../../../assets/image/btn.png'
import Imgfour from '../../../assets/image/target.png'
import Imgfive from '../../../assets/image/mail.png'
export default function Job() {
    return (
        <div>
            <div className="job">
                <div className="container">
                    <div className="job-grid">
                        <div className='job-left-section'>
                            <img src={Imgone}></img>
                        </div>
                        <div className='job-right-section'>
                            <div className='job-right-section-one'>
                                <img src={Imgtwo}></img>
                            </div>
                            <div className='job-right-section-two'>
                                <h1>What if your job was making funny jokes and posting them online? Crazy, right!?</h1>
                            </div>
                            <div className='job-right-section-three'>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                            <div className='job-right-section-four'>
                                <button><span>Begin! Do something fun</span><img src={Imgthree}></img></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='action'>
                <div className='container'>
                    <div className='action-bg-dot-one'></div>
                    <div className='action-bg-dot-two'></div>
                    <div className='action-grid'>
                        <div className='action-grid-left-section'>
                            <div className='action-left-section-one'>
                                <h1>Don't be missing when the action starts. Join the waiting list!</h1>
                            </div>
                            <div className='action-left-section-two'>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt</p>
                            </div>
                            <div className='action-left-section-three'>
                                <input placeholder='Name'></input>
                            </div>
                            <div className='action-left-section-three'>
                                <input placeholder='Email Address'></input>
                            </div>
                            <div className='action-left-section-four'>
                                <button><span>Join the list! Standby for action</span><img src={Imgfour}></img></button>
                            </div>
                        </div>
                        <div className='action-grid-right-section'>
                            <div className='action-right-section-one'>
                                <img src={Imgfive}></img>
                            </div>
                            <div className='action-right-section-two'></div>
                            <div className='action-right-section-three'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}