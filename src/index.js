import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toggle/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./themeContext/themeContext";
import { ApiProvider } from "./context/apiContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const projectId = process.env.REACT_APP_CONNECT_WALLET_ID;

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
});

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

reportWebVitals();
