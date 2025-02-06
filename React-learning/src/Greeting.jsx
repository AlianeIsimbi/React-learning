import PropTypes from "prop-types"

function Greeting(props){
    return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>);
}
Greeting.proptypes ={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
Greeting.defaultProps ={
    isLoggedIn:false,
    username: "Guest",
}

export default Greeting;