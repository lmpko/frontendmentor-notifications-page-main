import React from 'react'
import NotificationComponent from './NotificationComponent'

const LayouComponent = () => {
  return (
    <section>
        <div className='notif-panel'>
          <div>
            <h1>Notifications</h1>
            <span className='number-of-new-notifications'>3</span>
          </div>
           
          <a href="" className='mark-all-as-read'>Mark all as read</a>
        </div>
        <NotificationComponent/>
    </section>
  )
}

export default LayouComponent