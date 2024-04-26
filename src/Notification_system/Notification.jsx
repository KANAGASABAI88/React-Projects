
import './Recent.css';

// NotificationSystem.js

import  { useState, useEffect } from 'react';
// import './NotificationSystem.css';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Load notification history from localStorage on component mount....
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(storedNotifications);
  }, []);

  const addNotification = (message) => {
    // Add a new notification to the list ....
    const newNotification = {
      id: Date.now(),
      message: message,
    };
    const updatedNotifications = [newNotification, ...notifications];
    setNotifications(updatedNotifications);
    // Update localStorage.....
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const removeNotification = (id) => {
    // Remove notification with the specified id ....
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
    // Update localStorage......
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  return (
    <div className="notification-system">
      <h2>Notification System</h2>
      <div className="notifications">
        {notifications.map((notification) => (
          <div className="notification" key={notification.id}>
            <p>{notification.message}</p>
            <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
          </div>
        ))}
      </div>
      <button onClick={() => addNotification(`Notification ${notifications.length + 1}`)}>Add Notification</button>
    </div>
  );
};

export default NotificationSystem;
