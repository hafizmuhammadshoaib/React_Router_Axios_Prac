import React , {Comoponent, Component} from 'react';
export default class Careers extends Component{
    render(){
        return(
            <div>
                <h1>Careers</h1>
                {this.props.location.state && this.props.location.state.name}
            </div>
        )
    }
}