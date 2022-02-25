import React, { ReactHTMLElement, useState } from 'react';
import './WorriorCardSection.css'
import { GrMoney } from 'react-icons/gr';
import useNftStake from '../../../hooks/use-nft-stake';
import useWalletNfts from '../../../hooks/use-wallet-nfts';
import { AiOutlineMinusCircle } from 'react-icons/ai';


import WorriorCard from './WorriorCard';
const order = [
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 }
]
const WorriorCardSection = () => {
    const [product, setProduct] = useState<number[]>([]);
    const [unStackproduct, setUnStackproduct] = useState<number[]>([]);
    const { isLoading, stakedNfts, claimAmount, stakeNft, unstakeNft, claimRewards } = useNftStake();
    const { isLoadingWalletNfts, walletNfts, setWalletNfts } = useWalletNfts();
    const handleOrderCollect = (e : React.ChangeEvent<HTMLInputElement>, i : number) => {
        console.log(e, i)
        if (e.target.checked) {
            setProduct([...product, i])
        }
        else {
            setProduct(product.filter((item) => item !== i))
        }
    }

    const handleUnstackProduct = (e : React.ChangeEvent<HTMLInputElement>, i : number) => {
        console.log(e, i)
        if (e.target.checked) {
            setUnStackproduct([...product, i])
        }
        else {
            setUnStackproduct(product.filter((item) => item !== i))
        }
    }
    const handleUnstake = async () => {
        for (let i=0 ; i<product.length ; i++){
            await unstakeNft(stakedNfts[product[i]].stakeData);
        }
        
    }

    const handleStake = async () => {
        for (let i=0 ; i<unStackproduct.length ; i++){
            await stakeNft(walletNfts[unStackproduct[i]].address);
        }
        
    }
    return (
        <div className='worriors'>
            <h1>My Worriors</h1>
            <div >

                <div className='select-count-area'>
                    <div className='battle-area'>
                        <div className='battle-area-two'>
                            <button className='battle-area-btn'>Battle Arena </button>
                        </div>
                        <div className='battle-area-two'>
                            <button className='battle-area-btn battle-btn-two'>Junkyard Tab</button>
                        </div>
                    </div>
                    <div className='selceted-item'>
                        <button className='selected-item-btn selected'>All</button>
                        <button className='selected-item-btn'>Slumber</button>
                        <button className='selected-item-btn'>Prophets</button>
                    </div>
                    <div className='select-cancel-area'>
                        <div>
                            <span ><AiOutlineMinusCircle style={{ background: "red", color: "white", borderRadius: "50%" }} /></span>
                            <span> {product.length} selected</span>
                            <button className='selected-area-btn'>restart</button>
                            <button className='selected-area-btn'>cancel</button>
                        </div>
                        <div>Level: hight to low <span> + </span></div>
                    </div>
                </div>
            </div>

            {/* make a card are  */}

            <div className='warrior-card-section'>
                {
                    stakedNfts.length > 0 ?
                        stakedNfts.map((nft: any, idx: number) => {
                            return <WorriorCard key={idx} nft = {nft} index={idx} image={nft.image} name={nft.name} handleOrderCollect={handleOrderCollect}></WorriorCard>;
                        })
                    :
                        <p>You didn't stake any NFTs.</p>
                }
            </div>
            <button onClick={handleUnstake}>Unstack</button>
            <div className='warrior-card-section'>
                {
                    walletNfts.length > 0 ?
                    walletNfts.map((nft: any, idx: number) => {
                            return <WorriorCard key={idx} nft = {nft} index={idx} image={nft.image} name={nft.name} handleOrderCollect={handleUnstackProduct}></WorriorCard>;
                        })
                    :
                        <p>You have no NFTs.</p>
                }
            </div>
            <button onClick={handleStake}>stack</button>
        </div>
    );
};

export default WorriorCardSection;