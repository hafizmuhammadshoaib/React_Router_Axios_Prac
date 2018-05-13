import React, { Component } from "react";
import HttpService from "./Service/HttpService";
import ReactLoading from "react-loading";
export default class Git extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: {} };
  }

  componentDidMount() {
    
      HttpService.get(this.props.match.params.username).then((response)=>{
          this.setState({isLoading:false,data:response.data})
      })
      
  }
  render() {
    if (this.state.isLoading) {
      return (
        <ReactLoading
          type={"circle"}
          color={"#000"}
          height={667}
          width={375}
        />
      );
    } else {
      return (
        <div>
            {console.log(this.state.data.login)}
          <span>{this.state.data.login}</span>
        </div>
      );
    }
  }
}
