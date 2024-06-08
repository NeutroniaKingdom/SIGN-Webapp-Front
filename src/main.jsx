import ReactDOM from 'react-dom/client'
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import App from './App.jsx'
import './assets/css/index.css'
import {persistor, store} from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
)