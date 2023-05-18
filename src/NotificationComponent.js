import React from 'react'
import { data } from "/data"


const NotificationComponent = () => {
  return (
    <>
    
        {data.map((item, key) => (
            <div className='notification-card' key={key}>
              <div className='notification-avatar-texts-container'>
                {item?.avatar && <img src={item?.avatar} alt={item?.name}/>}
                <div className='notification-texts'>
                    {item?.name && <a href="" className='author-name'>{item?.name}</a>}
                    {item?.action && <h3 className='notif-action'>{item?.action}</h3>}
                    {item?.post && <a href="" className='notif-post'>{item?.post}</a>}
                    {item?.club && <a href="" className='notif-club'>{item?.club}</a>}
                    {item?.timestamp  && <span className='notif-timestamp'>{item?.timestamp}</span>}
                    {item?.message && <p className='notif-message'>{item?.message}</p>}
                </div>
              </div>
                
                {item?.picture && <img src={item?.picture} alt="pic" className='pic'/>}
            </div>
        ))}
    </>
  )
}

export default NotificationComponent