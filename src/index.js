import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
	<SpeechProvider appId='345909ba-de61-495e-9be0-ad3dc7cc8d8c' language='en-US'>
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,

	document.getElementById('root')
);
