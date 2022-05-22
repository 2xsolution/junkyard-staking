import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./junkeywardsSlumber.css";
import { AiFillCaretDown } from "react-icons/ai";
const pic = "../../../Image/image 7.png";
const pic1 = "../../../Image/pk.png";

const JunkeywardsSlumber = () => {
  return (
    <div>
      <div className="people-Junkyards">
        {/* <h1>Daddyyard</h1> */}
        <h1>Staking Types </h1>
      </div>
      <div className="slumber-section">
        <div className="slumbers">
          <div className="slumber">
            <div className="slumber-header">
              {/* <div>
                <img src={pic} />
              </div> */}
              <div>
                <h2>Active Staking</h2>
                {/* <p>9,995</p> */}
                {/* <h3>
                  <AiFillCaretDown className="downArrow" />9
                </h3> */}
              </div>
            </div>
            <div className="slumber-details">
              <div className="slumber-content">
                <h5>Earn</h5>
                <p>3 $DADDY/day</p>
              </div>
              <div className="slumber-content">
                <h5>Lockup Period</h5>
                <p>None</p>
              </div>
              <div className="slumber-content">
                <h5>Multiplier</h5>
                <p>9+2 $DADDY/day per additional Daddy staked 9</p>
              </div>
            </div>
          </div>
          <div className="pk">
            <img src={pic1} /> <br />
            <span className="stand_line"></span>
          </div>
          <div className="slumber">
            <div className="slumber-header">
              {/* <div>
                <img src={pic} />
              </div> */}
              <div>
                <h2>Passive Staking</h2>
                {/* <p>9,995</p> */}
                {/* <h3>
                  <AiFillCaretDown className="downArrow" />9
                </h3> */}
              </div>
            </div>
            <div className="slumber-details">
              <div className="slumber-content">
                <h5>Earn</h5>
                <p>5 $DADDY/day or 7 $DADDY/day</p>
              </div>
              <div className="slumber-content">
                <h5>Lockup Period</h5>
                <p>7 days or 30 days</p>
              </div>
              <div className="slumber-content">
                <h5>Multiplier</h5>
                <p>+1 $DADDY/day per rank</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="slumber-footer">
          <p>
            {" "}
            <span className="timing">23.00.00</span> ENDS IN: UTC 2022-02-02
            19.00.00{" "}
          </p>
          <div className="progress_line">
            <ProgressBar now={100} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default JunkeywardsSlumber;
