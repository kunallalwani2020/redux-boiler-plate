const INTIAL_STATE={
    users:[{
        name:"kunal"
    }]
}

export default(state= INTIAL_STATE ,action)=>{
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                users:[action.data]
            })
            default:
            return state;
    }
    // console.log("action===>",action)
   
}