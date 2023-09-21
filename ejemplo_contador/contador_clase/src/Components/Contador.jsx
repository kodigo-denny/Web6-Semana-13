import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {valor: 0}
        console.log("Constructor de contador")
        //console.log(props)
    }

    cambiar(num){
        if(num === 0)
            this.setState({valor: 0})
        else
            this.setState({valor: this.state.valor + num})
    }

    componentDidMount(){
        console.log("Did mount: Contador")
    }

    componentDidUpdate(){
        console.log("Did update: Contador")
    }

    componentWillUnmount(){
        console.log("will unmount: Contador")
    }

    render(){
        console.log("Render de contador")
        return <div>
            <h1>{this.props.children}</h1>
            <Pantalla>{this.state.valor}</Pantalla>
            <div className="row">
                <Boton evento={() => this.cambiar(-1)}>-</Boton>
                <Boton evento={() => this.cambiar(0)}>reset</Boton>
                <Boton evento={() => this.cambiar(1)}>+</Boton>
            </div>
        </div>
    }
}

export default Contador