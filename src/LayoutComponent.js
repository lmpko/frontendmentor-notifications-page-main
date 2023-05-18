import React, {useState} from 'react'
import NotificationComponent from './NotificationComponent'
import { data } from "/data"

const LayoutComponent = () => {
  
  const [notificationData, setNotificationData] = useState(data);
  const unreadData = notificationData.filter((item) => item.status === 'unread');
  
  const markAllAsRead = () => {
    const updatedData = notificationData.map((item) => {
      return { ...item, status: 'read' };
    });
    
    setNotificationData(updatedData);
  };
  
  return (
    <section>
        <div className='notif-panel'>
          <div>
            <h1>Notifications</h1>
            <span className='number-of-new-notifications'>{unreadData.length}</span>
          </div>
           
          <a href="#" className='mark-all-as-read' onClick={markAllAsRead}>Mark all as read</a>
        </div>
        <NotificationComponent data={notificationData}/>
    </section>
  )
}

export default LayoutComponent;