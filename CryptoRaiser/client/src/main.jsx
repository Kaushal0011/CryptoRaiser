import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { Buffer } from 'buffer';
window.Buffer = Buffer;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <ThirdwebProvider desiredChainId={ChainId.amoy}></ThirdwebProvider>
    <ThirdwebProvider desiredChainId={80002}>
        <Router>
        <StateContextProvider>
            <App />
        </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)