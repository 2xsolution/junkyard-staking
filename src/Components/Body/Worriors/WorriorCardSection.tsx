import React, { ReactHTMLElement, useState } from "react";
import "./WorriorCardSection.css";
import { GrMoney } from "react-icons/gr";
import useNftStake from "../../../hooks/use-nft-stake";
import useWalletNfts from "../../../hooks/use-wallet-nfts";
import { AiOutlineMinusCircle } from "react-icons/ai";

import WorriorCard from "./WorriorCard";
import WorriorUnstackedCard from "./WorriorUnstackedCard";
import Loader from "../../Loader/Loader";

import {
    Keypair,
    PublicKey,
    Transaction,
    ConfirmOptions,
    SYSVAR_CLOCK_PUBKEY,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

import {
  MintLayout,
  TOKEN_PROGRAM_ID,
  Token,
} from "@solana/spl-token";

import * as anchor from "@project-serum/anchor";

const order = [
  { name: 22 },
  { name: 22 },
  { name: 22 },
  { name: 22 },
  { name: 22 },
  { name: 22 },
];
const WorriorCardSection = () => {
  const [product, setProduct] = useState<number[]>([]);
  const [unStackproduct, setUnStackproduct] = useState<number[]>([]);
  const [showLoader, setShowLoader] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const stopLoader = () => {
    setShowLoader(false);
    setLoadingMessage("");
  };
  const {
    isLoading,
    stakedNfts,
    claimAmount,
    stakeNft,
    unstakeNft,
    claimRewards,
  } = useNftStake();
  const { isLoadingWalletNfts, walletNfts, setWalletNfts } = useWalletNfts();
  const handleOrderCollect = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    console.log(e, i);
    if (e.target.checked) {
      setProduct([...product, i]);
    } else {
      setProduct(product.filter((item) => item !== i));
    }
  };

  const handleUnstackProduct = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    console.log(e, i);
    if (e.target.checked) {
      setUnStackproduct([...product, i]);
    } else {
      setUnStackproduct(product.filter((item) => item !== i));
    }
  };
  const handleUnstake = async () => {
    setShowLoader(true);
    setLoadingMessage("Your NFT is UnStaking..");
    await unstakeNft(walletNfts)
  };

  const handleStake = async () => {
    setShowLoader(true);
    setLoadingMessage("Your NFT is Staking..");
    for (let i = 0; i < unStackproduct.length; i++) {
      await stakeNft(walletNfts[unStackproduct[i]].address);
    }
  };

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="worriors">
      <h1>My Warriors</h1>
      {showLoader && <Loader text={loadingMessage} />}
      <div>
        <div className="select-count-area">
          <div className="battle-area">
            <div className="battle-area-two" onClick={() => setTabIndex(0)}>
              <button
                className="battle-area-btn"
                style={tabIndex !== 0 ? { background: "#010920" } : {}}
              >
                Battle Arena{" "}
              </button>
            </div>
            <div className="battle-area-two" onClick={() => setTabIndex(1)}>
              <button
                className="battle-area-btn "
                style={tabIndex !== 1 ? { background: "#010920" } : {}}
              >
                Junkyard
              </button>
            </div>
          </div>
          {/* <div className="selceted-item">
            <button className="selected-item-btn selected">All</button>
            <button className="selected-item-btn">Slumber</button>
            <button className="selected-item-btn">Prophets</button>
          </div> */}
          {tabIndex == 0 && (
            <div className="select-cancel-area">
              <div>
                <span>
                  <AiOutlineMinusCircle
                    style={{
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  />
                </span>
                <span> {product.length} selected</span>
                {/* <button className="selected-area-btn">restart</button> */}
                {/* <button className="selected-area-btn">cancel</button> */}
              </div>
              {/* <div>
              Level: hight to low <span> + </span>
            </div> */}
            </div>
          )}
        </div>
      </div>

      {/* make a card are  */}

      {tabIndex === 0 ? (
        <>
          <div className="warrior-card-section">
            {stakedNfts.length > 0 ? (
              stakedNfts.map((nft: any, idx: number) => {
                return (
                  <WorriorCard
                    key={idx}
                    nft={nft}
                    index={idx}
                    image={nft.image}
                    name={nft.name}
                    handleOrderCollect={handleOrderCollect}
                  ></WorriorCard>
                );
              })
            ) : (
              <p style={{color:'white'}}>You didn't stake any NFTs.</p>
            )}
          </div>
          <button
            onClick={() => handleUnstake().then(() => stopLoader())}
            className="custom-btn my-3 w-max"
          >
            Un-stake
          </button>
          <div className="warrior-card-section">
            {walletNfts.length > 0 ? (
              walletNfts.map((nft: any, idx: number) => {
                return (
                  <WorriorUnstackedCard
                    key={idx}
                    nft={nft}
                    index={idx}
                    image={nft.image}
                    name={nft.name}
                    handleOrderCollect={handleUnstackProduct}
                  ></WorriorUnstackedCard>
                );
              })
            ) : (
              <p style={{color:'white'}}>You have no NFTs.</p>
            )}
          </div>
          <button
            onClick={() => handleStake().then(() => stopLoader())}
            className="custom-btn my-3 w-max"
          >
            Stake
          </button>
        </>
      ) : (
        <div className="text-white py-3" style={{ background: "#343855" }}>
          <h2>Coming Soon</h2>
        </div>
      )}
    </div>
  );
};

export default WorriorCardSection;
