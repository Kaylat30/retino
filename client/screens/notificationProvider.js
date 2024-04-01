import React, { createContext, useState, useContext } from 'react';


const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(2);

  const updateNotificationCount = (count) => {
    setNotificationCount(count);
  };

  return (
    <NotificationContext.Provider value={{ notificationCount, updateNotificationCount }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
