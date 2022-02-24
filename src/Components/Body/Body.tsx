import React from 'react'
import SideContent from './SideContent/SideContent'
import WorriorCardSection from './Worriors/WorriorCardSection'
import './Body.css'

const Body = () => {
  return (
    <>
      <div className="container bod gaming-warrior">
        <div className="side_content">
          <SideContent/>
        </div>
        <div className="my_warrior">    
            <WorriorCardSection/>
        </div>
      </div>
    </>
  )
}

export default Body