import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)
        //console.log(props)
    }

    render(){
        return <button onClick={this.props.evento} className="btn btn-success col-4">{this.props.children}</button>
    }
}

export default Boton