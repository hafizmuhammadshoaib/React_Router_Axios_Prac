import React , {Comoponent, Component} from 'react';
export default class About  extends Component{
    render(){
        return(
            <div>
                <h1>About</h1>
                <button onClick={()=>{
                    this.props.history.push({
                        pathname:'/careers',
                        state:{name:"shoaib"}
                    })
                }} >Route to Careers</button>
            </div>
        )
    }
}