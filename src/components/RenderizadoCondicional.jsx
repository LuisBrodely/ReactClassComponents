import {Component} from "react";

const Login = () => {
  return(
      <div>
          <h5>Login</h5>
      </div>
  );
}

function Logout() {
    return(
        <div>
            <h5>Logout</h5>
        </div>
    );
}

class RenderizadoCondicional extends Component{
    constructor(props) {
        super(props);

        this.state={
            session:true
        }
    }


    render() {
        return(
            <div>
                <h3>Renderizado Condicional</h3>
                <h4>{this.state.session? <Login/> : <Logout/>}</h4>
            </div>
        );
    }
}

export default RenderizadoCondicional;