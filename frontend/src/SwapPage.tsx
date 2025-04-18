import { useState } from 'react';


export default function SwapPage() {
  const [fromToken, setFromToken] = useState<string>('ETH');
  const [toToken, setToToken] = useState<string>('USDC');
  const [fromAmount, setFromAmount] = useState<string>('');
  const [toAmount, setToAmount] = useState<string>('');
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

  const handleSwapTokens = (): void => {
    const tempToken: string = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);
  };

  const connectWallet = (): void => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <div className="container">
      <div className="swap-card">
        <div className="card-header">
          <h1>Swap Tokens</h1>
          <button 
            onClick={connectWallet}
            className={`wallet-btn ${isWalletConnected ? 'disconnect' : 'connect'}`}
          >
            {isWalletConnected ? 'Disconnect' : 'Connect Wallet'}
          </button>
        </div>

        <div className="token-box">
          <div className="token-header">
            <p>From</p>
            <select 
              value={fromToken} 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFromToken(e.target.value)}
              className="token-select"
            >
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="USDC">USDC</option>
            </select>
          </div>
          <input
            type="number"
            placeholder="0.0"
            value={fromAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFromAmount(e.target.value)}
            className="token-input"
          />
        </div>

        <div className="swap-direction-wrapper">
          <button 
            onClick={handleSwapTokens}
            className="swap-direction-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 10l5 5 5-5"></path>
              <path d="M7 14l5-5 5 5"></path>
            </svg>
          </button>
        </div>

        <div className="token-box">
          <div className="token-header">
            <p>To</p>
            <select 
              value={toToken} 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setToToken(e.target.value)}
              className="token-select"
            >
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="USDC">USDC</option>
            </select>
          </div>
          <input
            type="number"
            placeholder="0.0"
            value={toAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToAmount(e.target.value)}
            className="token-input"
          />
        </div>

        <button 
          className={`swap-btn ${!isWalletConnected ? 'disabled' : ''}`}
          disabled={!isWalletConnected}
        >
          {!isWalletConnected ? 'Connect Wallet to Swap' : `Swap ${fromToken} to ${toToken}`}
        </button>
      </div>
    </div>
  );
}