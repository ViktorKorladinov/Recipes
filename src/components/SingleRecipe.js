import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchRecipeById} from "../actions/postActions";
import '../styles/SingleRecipe.css'

class SingleRecipe extends Component {

    componentDidMount() {
        this.props.fetch(this.props.match.params.recipeId);
    }

    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        let ingredients = {};
        if (this.props.recipe.ingredients !== undefined) {
            let id= 0;
            ingredients = this.props.recipe.ingredients.map(ingredient => (
                <li key={id++}>{ingredient}</li>
            ));
        }
        else ingredients = <li>None</li>;
        return (
            <div>
                <h1 className={'headers'}>{this.props.recipe.name}</h1>
                {this.props.recipe.description}
                <hr/>
                {this.props.recipe.country}
                <hr/>
                <ul>
                    {ingredients}
                </ul>
            </div>
        );
    }
}

SingleRecipe.propTypes = {
    recipe: PropTypes.object,
    fetch: PropTypes.func.isRequired
};


const MapStateToProps = (state) => ({
    recipe: state.parts.recipe
});

const MapDispatchToProps = (dispatch) => ({
    fetch: (id) => {
        dispatch(fetchRecipeById(id))
    }
});

export default connect(MapStateToProps, MapDispatchToProps)(SingleRecipe);
