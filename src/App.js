import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import RoutingSwitcher from "./components/RoutingSwitcher";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (

            <Provider store={store}>
                <div className="App">
                    <RoutingSwitcher/>
                </div>
            </Provider>

        );
    }
}

export default App;
