import {Component} from "react";

class Estado extends Component{
    constructor(props) {
        super(props);
        //Aqui creamos el objeto del estado
        this.state={
            contador:0
        }
    }

    render() {
        return(
            <div>
                <h3>El State</h3>
                <button onClick={
                    //Prohibido hacer esto
                    //this.state.contador+1
                    //Ya que modifica el estado de forma directa
                    ()=> this.setState({
                        contador: this.state.contador+1
                    })
                }>{this.state.contador}</button>
                <EstadoAHijo contador={this.state.contador}/>
            </div>
        );
    }
}

function EstadoAHijo(props) {
    return(
        <div>
            <h5>{props.contador}</h5>
        </div>
    );
}

export default Estado;