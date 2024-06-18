import './footer.scss'
import Imgone from '../../../assets/image/smile1.png'
import Footerimg from '../../../assets/image/footer.png'
export default function Footer() {
    return (
        <div className="footer">
            <div className='container'>
                <div className='footer-top'>
                    <div className='footer-img'>
                        <img src={Imgone}></img>
                    </div>
                    <div className='footer-text-one'>
                        <p>LOL</p>
                    </div>
                    <div className='footer-text-two'>
                        <span>Don’t take life too seriously; you will not make it out alive anyways!</span>
                    </div>
                </div>
            </div>
            <div className='footer-main-img'>
                <img src={Footerimg}></img>
            </div>
        </div>     
    )
}