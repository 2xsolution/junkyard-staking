
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Navbars from "./Components/Navbar/Navbars";

import './App.css'

import {useMemo} from 'react';
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletBalanceProvider } from './hooks/use-wallet-balance';
import {NEXT_PUBLIC_SOLANA_NETWORK} from './constant/env';
let WALLETS: any = {
  getPhantomWallet: () => ({ name: 'Phantom' }),
  getSolflareWallet: () => ({ name: 'Solflare' }),
  getSolletWallet: () => ({ name: 'Sollet' }),
  getLedgerWallet: () => ({ name: 'Ledger' }),
  getSlopeWallet: () => ({ name: 'Slope' }),
  getSolletExtensionWallet: () => ({ name: 'SolletExtension' })
};
if (typeof window !== "undefined") {
  WALLETS = require("@solana/wallet-adapter-wallets");
}
const network = NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;

const App : React.FC = () => {

  const endpoint = useMemo(() => 'https://solana-api.projectserum.com', []);

  const wallets = useMemo(
    () => [
      WALLETS.getPhantomWallet(),
      WALLETS.getSolflareWallet(),
      WALLETS.getSolletWallet({ network }),
      WALLETS.getLedgerWallet(),
      WALLETS.getSlopeWallet(),
      WALLETS.getSolletExtensionWallet({ network }),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <WalletBalanceProvider>
              <div >
              <Header/>
              <Navbars/>
              <Body/>
            </div>
            </WalletBalanceProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  
  );
}

export default App;
