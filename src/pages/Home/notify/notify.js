
import './notify.css'
import {image} from '../../../component/access/image'
import {notifyImage} from '../../../component/access/image'

function Notify(){
    
    return (
        <div className="notify" 
            style={{background: `url(${image.backgroundNotify})`,
                    backgroundSize: 'cover' }}
            id="to-notify"
        >
            <h1 className="notify-Title">
                NOTYFY THE MONTH
            </h1>
            <div className="notify-Body">
                <div className='notify-Item' >
                    <div className='notify-Box-Image'>
                        <img className='notify-Image' alt='img notify' src={notifyImage[0].src}/>
                    </div>
                    <p className='notify-SaleOff'>{notifyImage[0].des}</p>
                    <p className='notify-Body-Title'>{notifyImage[0].title}</p>
                    <h4 className='notify-Name'>{notifyImage[0].name}</h4>
                </div>
                <div className='notify-Item' >
                    <div className='notify-Box-Image'>
                        <img className='notify-Image' alt='img notify' src={notifyImage[1].src}/>
                    </div>
                    <p className='notify-SaleOff'>{notifyImage[1].des}</p>
                    <p className='notify-Body-Title'>{notifyImage[1].title}</p>
                    <h4 className='notify-Name'>{notifyImage[1].name}</h4>
                </div>
            </div>
        </div>
    )
}

export default Notify