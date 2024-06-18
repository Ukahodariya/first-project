import Imgone from '../../../assets/image/joke-one.png';
import Imgtwo from '../../../assets/image/joke-arrow.png';
import Imgthree from '../../../assets/image/btn.png';
import Imgfour from '../../../assets/image/joke-right-down.png'
import './joke.scss'
export default function Joke() {
    return (
        <div className='joke'>
            <div className='container'>
                <div className='joke-blur'>
                    <div className='joke-blur-dot'></div>
                </div>
                <div className='joke-grid'>
                    <div>
                        <div className='joke-left-part-one'>
                            <img src={Imgone}></img>
                        </div>
                        <div className='joke-left-part-two'>
                            <h1>Life is a joke, and so is this job, lol!</h1>       
                        </div>
                        <div className='joke-left-part-three'> 
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className='joke-left-part-four'>
                            <img src={Imgtwo}></img>
                        </div>
                        <div className='joke-left-part-five'>
                            <button><span>Begin! Do something fun</span><img src={Imgthree}></img></button>
                        </div>
                    </div>
                    <div className='joke-gri-part-two'>
                        <div className='joke-right-part-one'> 
                            <img src={Imgfour}></img>
                        </div>
                        <div className='joke-right-part-two'></div>
                        <div className='joke-right-part-three'></div>
                        <div className='joke-right-part-four'></div>
                        <div className='joke-right-part-five'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}