import React from 'react'

export default function Nav() {
  return (
    <div className='nav-container'>
      <div className='Spakle'>
        <img src="https://www.sparkleappeal.org/ckfinder/userfiles/images/core/logo.png" alt="" />
      </div>
      <div className="nav d-flex flex-column">
        
        <ul>
          <li><b>Inbox</b></li>
          <li className='Dash'>&#9776; DashBoard</li>
          <li>&#9993; New</li>
          <li>&#128100; Assigned to me</li>
          <li>@ Mentioned</li>
          <li>&#9733; Favourite</li>
          <li>&#10003; Closed</li>
          <li>&#9998; Drafts</li>
          <li>&#8986; Snoozed</li>
        </ul>
      </div>
    </div>
  )
}
