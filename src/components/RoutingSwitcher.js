import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Recipes from "./Recipes";
import Front from "./Front";

import RecipeForm from "./RecipeForm";

class RoutingSwitcher extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Front}/>
                        <Route path="/recipes" component={Recipes}/>
                        <Route exact path="/create" component={RecipeForm}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default RoutingSwitcher;
