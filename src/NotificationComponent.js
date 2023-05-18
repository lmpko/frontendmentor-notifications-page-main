import React from 'react'
import { data } from "/data"


const NotificationComponent = () => {
  return (
    <>
    
        {data.map((item, key) => (
            <div className='notification-card' key={key}>
                {item?.avatar && <img src={item?.avatar} alt={item?.name}/>}
                <div className='notification-texts'>
                    {item?.name && <h2 className='author-name'>{item?.name}</h2>}
                    {item?.action && <h3 className='notif-action'>{item?.action}</h3>}
                    {item?.post && <h4 className='notif-post'>{item?.post}</h4>}
                    {item?.club && <h5 className='notif-club'>{item?.club}</h5>}
                    {item?.timestamp  && <span className='notif-timestamp'>{item?.timestamp}</span>}
                    {item?.message && <p className='notif-message'>{item?.message}</p>}
                </div>
                {item?.picture && <img src={item?.picture} alt="pic"/>}
            </div>
        ))}
    </>
  )
}

export default NotificationComponent