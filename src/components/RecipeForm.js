import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import '../styles/RecipeForm.css'
import PropTypes from 'prop-types'
import {createRecipe} from "../actions/postActions";
import {connect} from "react-redux";

class RecipeForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            country: '',
            ingredients: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChange(e) {
        this.setState({
            temp: e.target.value
        });
    }

    onSubmit() {
        const recipe = {
                name: this.state.name,
                description: this.state.description,
                country: this.state.country,
                ingredients: this.state.ingredients
            }
        ;
        this.props.createRecipe(recipe);
    }

    render() {
        return (
            <div className={'formBender'}>
                <Form>
                    <FormGroup row>
                        <Label for="Title" md={2}>Title:</Label>
                        <Col md={10}>
                            <Input type="text" name="name" id="nameId" placeholder="Title of the recipe"
                                   onChange={this.onChange}
                                   value={this.state.name}/></Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={2} for="Country">Country:</Label>
                        <Col md={10}>
                            <Input type="text" name="country" id="countryId" placeholder="Origin of the recipe"
                                   onChange={this.onChange}
                                   value={this.state.country}/></Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={2} for="exampleText">Directions</Label>
                        <Col md={10}>
                            <Input type="textarea" name="description" id="descriptionId"
                                   placeholder="Explain yoself"
                                   onChange={this.onChange}
                                   value={this.state.description}/></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} for="Ingredients">Ingredients:</Label>
                        <Col md={8}>
                            <Input type="text" name="ingredient" id="ingredientId" placeholder="Ingredient"
                                   onChange={this.handleChange}
                            /></Col>
                        <Col offset={1} md={1}>
                            <Button onClick={() => {
                                this.putIn()
                            }}>
                                Add ingredient
                            </Button>
                        </Col>
                    </FormGroup>
                    <Button onClick={()=>{this.onSubmit()}}>Submit</Button>
                </Form>
            </div>
        );
    }

    putIn() {
        this.setState({
            ingredients: this.state.ingredients.concat(this.state.temp)
        });
    }

}

RecipeForm.propTypes = {
    createRecipe: PropTypes.func.isRequired
};

export default connect(null, {createRecipe})(RecipeForm);
