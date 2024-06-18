import './life.scss'
import Imgone from '../../../assets/image/life.png'
export default function Life()
{
    return(
        <div className="life">
            <div className="container">
                <div className="life-text-section">
                    <div className="life-text-section-one">
                        <h1>The only job that adds years to your life</h1>
                    </div>
                    <div className='life-text-section-two'>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className='life-img-section'>
                    <div className='life-img-section-one'>
                        <img src={Imgone}></img>
                    </div>
                    <div className='life-img-section-two'></div>
                    <div className='life-img-section-three'></div>
                    <div className='life-img-section-four'></div>
                    <div className='life-img-section-five'></div>
                </div>
            </div>
        </div>
    )
}