import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toggle/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./themeContext/themeContext";
import { ApiProvider } from "./context/apiContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const projectId = process.env.REACT_APP_CONNECT_WALLET_ID || "45fef58f3f6ccb3d8afa7b2883387d3c"

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <ThemeProvider>
        <ApiProvider>
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </WagmiProvider>
          <ToastContainer />
        </ApiProvider>
      </ThemeProvider>
    </SkeletonTheme>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
