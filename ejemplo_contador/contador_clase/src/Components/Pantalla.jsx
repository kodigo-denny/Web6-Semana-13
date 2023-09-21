import React from "react";

class Pantalla extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <input type="text" value={this.props.children} className="form-control" readOnly disabled />
        </div>
    }
}

export default Pantalla