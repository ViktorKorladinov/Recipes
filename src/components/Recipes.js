import React, {Component} from "react";
import {Col, ListGroup, ListGroupItem, Row} from 'reactstrap';
import {Route, Link, withRouter} from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
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

            <Row>
                <Col md={4}>
                    <ListGroup className={'listGroup'}>
                        {recipeList}
                    </ListGroup>
                </Col>
                <Col md={8}>
                    <Route exact path="/recipes/:recipeId" key={this.state.key} component={SingleRecipe}/></Col>
            </Row>


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

export default withRouter(connect(mapStateToProps, {fetchAllRecipes})(Recipes));
