import { connect } from "react-redux";
import Login from "../components/Login";


mapStatesToProps = (state) => {
    return{
        username: state.username, 
        password: state.password
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        login:() => dispatch({type: 'login'}),
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(Login);