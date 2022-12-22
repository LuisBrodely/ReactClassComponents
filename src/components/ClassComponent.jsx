import {Component} from "react";

class ClassComponent extends Component{
    render() {
        return(
            <div>
                <h3>Hola! Soy un Componente de Clase</h3>
                <h4>{this.props.propiedad}</h4>
            </div>
        );
    }
}

export default ClassComponent;