import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Recipes from "./Recipes";
import Front from "./Front";

import RecipeForm from "./RecipeForm";
import SingleRecipe from "./SingleRecipe";

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
                        <Route exact path="/recipes" component={Recipes}/>
                        <Route exact path="/create" component={RecipeForm}/>
                        <Route path="/recipes/:recipeId" key={this.state.key} component={SingleRecipe}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default RoutingSwitcher;
