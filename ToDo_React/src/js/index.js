import '../scss/index.scss';

import {createRoot} from 'react-dom/client';

import App from './Components/App'

let element = document.querySelector(".main");

let rootElement = createRoot(element);

rootElement.render(<App />);

