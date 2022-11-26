
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return (
        <footer className='footer'>
            <div className='footerBox'>
                <span className='footerContent'>
                    Copyright © 2022 foodIg.  Hotline: 1900 12345 
                    Địa chỉ:  Quận cầu giấy, Thành phố Hà Nội, Việt Nam
                </span>
                <div className='footerContact'>
                    <ul className='footerList'>
                        <li className='footerItem'>
                            <FontAwesomeIcon icon={faPhone} />                             
                            <p className='footerText'>
                                1900 12345 
                            </p>
                        </li>
                        <li className='footerItem'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='footerText'>
                                foodg@gmail.com 
                            </p>
                        </li>
                        <li className='footerItem'>
                            <FontAwesomeIcon icon={faLocation} />
                            <p className='footerText'>
                                Hà Nội, Việt Nam 
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer