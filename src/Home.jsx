import React from'react';
import {connect} from'react-redux';
import{facebookLogin}from'./store/action';
function Home(props){

// console.log(props)

    return(
        <div>
          chatapp
   <button onClick={()=>props.facebookLogin()}>set</button>
        </div>
    )
}
const mapStateToProps=(state)=>({
  user:state.app.user
})
const mapDispatchToProps=(dispatch)=>({
  
facebookLogin: ()=>dispatch(facebookLogin())

})

export default connect(mapStateToProps, mapDispatchToProps) (Home);