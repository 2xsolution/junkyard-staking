import React from 'react'
import { AiFillCaretUp } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
        <div className="container header_option">
           <div className="header_option_box">
            <div className="froggo_stacked_rate">
                <p>Froggo Stacked Rate : <span>80%</span></p>
            </div>
            <div className="lfgo">
                   <p> 1 LFGO =   <span>$0.0089789</span></p>
            </div>
            <div className="share">
                <p><AiFillCaretUp/> <span>0.3%</span></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header;