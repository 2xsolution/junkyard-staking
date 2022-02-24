import React from 'react'
import { FiDatabase} from "react-icons/fi"
const Image = '../../../Image/image 7.png'

const JunkeywardsAndRecords = () => {
  return (
    <div className="winning">
        <div className="junkeywards_and_record">
            <li>Junkeywards</li>
            <li>Record</li>
        </div>
        <div className="winning_box">
                <div className="win">
                        <img src={Image} />
                        <div className="win_value">
                            <p>6 wins </p>
                        </div>
                </div>
                <div className="win border">
                        <img src={Image} alt={Image}/>
                        <div className="win_value">
                            <p>4 wins </p>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default JunkeywardsAndRecords