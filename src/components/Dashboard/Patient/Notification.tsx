import React, { useEffect } from 'react'

const Notification: React.FC = () => {

  useEffect(()=> {
    document.title = "Notifications"
  })
  return (
    <div>Notification</div>
  )
}

export default Notification