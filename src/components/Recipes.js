import React, {Component} from "react";
import { ListGroup, ListGroupItem} from 'reactstrap';
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchAllRecipes} from "../actions/postActions";
import {connect} from "react-redux";
import '../styles/Recipes.css'

class Recipes extends Component {

    componentWillMount() {
        this.props.fetchAllRecipes();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newRecipe) {
            this.props.recipes.unshift(nextProps.newRecipe);
        }
    }

    state = {};
    static propTypes = {};

    render() {
        const recipeList = this.props.recipes.map(recipe => (

            <ListGroupItem className={'listItem'} key={recipe.id} tag={Link} onClick={function () {
                this.setState({key: recipe.id})
            }
            } to={`/recipes/${recipe.id}`}>{recipe.name}
            </ListGroupItem>
        ));

        return (

            <div className="backer">
                <ListGroup style={{width: '50%', marginLeft:'auto', marginRight:'auto',}} className={'listGroup'}>
                    {recipeList}
                </ListGroup>
            </div>


        )
    }
}

Recipes.propTypes = {
    fetchAllRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
    newRecipe: PropTypes.object
};

const mapStateToProps = state => ({
    recipes: state.parts.recipes,
    newRecipe: state.parts.creation
});

export default connect(mapStateToProps, {fetchAllRecipes})(Recipes);
