import React from 'react'

function Notification({message, error}) {
  
    if (message === null && error === null) return null
    
    else if (message) return <div className="notif">{message}</div>
  
    else return <div className='err'>{error}</div>
    
    
}

export default Notification