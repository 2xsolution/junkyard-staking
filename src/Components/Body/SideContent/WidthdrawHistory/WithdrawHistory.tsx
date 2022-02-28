import React, { useState } from "react";
import { FiDatabase } from "react-icons/fi";
import useNftStake from "../../../../hooks/use-nft-stake";
const WithdrawHistory = () => {
  const {
    isLoading,
    stakedNfts,
    claimAmount,
    stakeNft,
    unstakeNft,
    claimRewards,
  } = useNftStake();
  const [showLoader, setShowLoader] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleClaim = async () => {
    setLoadingMessage("Withdrawing in progress..");

    await claimRewards();
  };

  const stopLoader = () => {
    setShowLoader(false);
    setLoadingMessage("");
  };
  return (
    <div className="withdraw_history">
      {/* <div className="reward_and_vault">
            <li>Reward</li>
            <li>Vault</li>
        </div> */}

      <div className="withdraw_history_box">
        <div className="withdraw">
          <div className="amount">
            <p className="withdraw_amount">
              <span>
                <FiDatabase />
              </span>{" "}
              12000
            </p>
            <a
              href="#"
              className="withdraw_btn"
              // onClick={() => handleClaim().then(() => stopLoader())}
            >
              withdraw
            </a>
          </div>
          {/* <div className="withdraw_history_p">withdraw History</div> */}
        </div>
        <div className="my_wallet">
          <a href="#">
            My Wallet:{" "}
            <span>
              <FiDatabase /> {`${claimAmount} JUNK`}{" "}
            </span>
            {/* <span className="buy"> Buy more</span> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
