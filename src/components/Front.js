import React, {Component} from 'react';
import '../styles/FrontStyle.css'
import {Button} from "reactstrap";
import {Link, withRouter} from "react-router-dom";


class Front extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {

        return (
            <div className={'frontStyle'}>
                <div className={'element'}>
                    <div className={'heading'}>Recipes From Every Corner of The World </div>
                    <Button tag={Link} to="/recipes" color="dark" style={{background:'rgb(250,128,38)',fontSize:'2.5vh', borderColor:'white'}}>Show Me!</Button>
                    <Button tag={Link} to="/create" color="dark" style={{background:'rgb(250,128,38)',fontSize:'2.5vh', borderColor:'white', marginLeft:'1vw'}}>Let Me Contribute!</Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Front);
