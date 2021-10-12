import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { DNDProvider } from './components';

ReactDOM.render(
	<DNDProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</DNDProvider>,
	document.getElementById('app')
);

serviceWorker.unregister();
