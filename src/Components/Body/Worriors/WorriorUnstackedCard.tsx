import React, { useCallback, useEffect, useState } from "react";
import "./WorriorCardSection.css";
import { GrMoney } from "react-icons/gr";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { STAKE_STATUS } from "../../../constant/contract";
import { FiDatabase } from "react-icons/fi";
import { getNftsForOwner } from "../../../utils/candy-machine";
const pic = "../../Image/card-img.png";
const pic1 = "../../Image/Screenshot_3-removebg-preview (2) 2.png";
interface WorriorCardInterface {
  image: any;
  name: string;
  index: number;
  nft: any;
  handleOrderCollect: (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => void;
}

const WorriorUnstackedCard = (props: WorriorCardInterface) => {
  const [time, setTime] = useState({ day: 0, hour: 0, minute: 0 });

  const getDurationHours = useEffect(() => {
    console.log("nft information", props.nft);
    let stackTime = Number(props.nft.stakeTime);
    let stackDate = new Date(stackTime * 1000);
    let now = new Date();
    let diffInTime = (now.getTime() - stackDate.getTime()) / 1000;
    let day = Math.round(diffInTime / (60 * 60 * 24));
    diffInTime = diffInTime % (60 * 60 * 24);
    let hour = Math.round(diffInTime / (60 * 60));
    diffInTime = diffInTime % (60 * 60);
    let minute = Math.round(diffInTime / 60);
    setTime({
      day: day,
      hour: hour,
      minute: minute,
    });
  }, [props.nft.stakeTime]);
  return (
    <div className="card-section">
      <div className="worrior-card">
        <div className="card-img">
          <img src={props.image} />
          <div className="card-selected">
            <input
              type="checkbox"
              onChange={(e) => {
                props.handleOrderCollect(e, props.index);
              }}
              className="checkbox-round"
            />
          </div>
        </div>
        <div className="card-body">
          <div className="game-level">
            <span className="level-serial">{props.name}</span>
          </div>
          <div className="reward">
          </div>
          <div className="duration">
            <div className="game-time">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorriorUnstackedCard;
