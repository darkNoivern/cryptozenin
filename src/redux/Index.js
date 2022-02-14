const InitialOBJ = {
    user: false,    //  if loggedIn or not
    currentUser: 'admin',   //  if loggedIn contains usename of currentUser
    axiosData: [],  //  contains the data we collected
    userDetails: [],    
    //  contains details of all users 
    //  generally contains : 
    //  username : 
    //  email: 
    //  password: 
    //  [] --> stalkList
  
};

let InitialState;
if(localStorage.getItem("cryptoCurrencyUserDetails") === null){
    InitialState = InitialOBJ;
}
else{
    InitialState = JSON.parse(localStorage.getItem("cryptoCurrencyUserDetails"))
}
// if(localStorage.getItem("userDetails") !== null)
console.log(InitialState)
const rootReducer = (state = InitialState, action) => {
    console.log('ini',state)
    switch(action.type){
        case 'SET_DATA':
            let newStateSetData = state;
            newStateSetData.axiosData = action.payload
            state = newStateSetData;
            localStorage.setItem("cryptoCurrencyUserDetails", JSON.stringify(state));
            return state;
        case 'ADD_TO_STALK':
            let newStateAddStalk = state;
            newStateAddStalk.userDetails.forEach((user)=>{
                if(user.username===state.currentUser){
                    user.userStalkList.push(action.payload);
                }
            })
            state = newStateAddStalk
            localStorage.setItem("cryptoCurrencyUserDetails", JSON.stringify(state));  
            return state;
        case 'REM_FROM_STALK':
            let newStateRemStalk = state; 
            let stalkArr;
            newStateRemStalk.userDetails.forEach((user)=>{
                if(user.username===state.currentUser){
                    stalkArr = user.userStalkList;
                }
            })
            const newUpdateArr = stalkArr.filter((coinId)=>{
                return (coinId!==action.payload)
            })
            newStateRemStalk.userDetails.forEach((user)=>{
                if(user.username===state.currentUser){
                    user.userStalkList = newUpdateArr;
                }
            })
            state = newStateRemStalk;
            localStorage.setItem("cryptoCurrencyUserDetails", JSON.stringify(state));    
            return state;
        case 'SIGN_UP':
            let newObj = {
                username: action.payload.username,
                password: action.payload.password,
                userStalkList: [],
            }
            state.userDetails.push(newObj);
            state.user = true;
            state.currentUser = action.payload.username;
            localStorage.setItem("cryptoCurrencyUserDetails", JSON.stringify(state));  
            return state;
        case 'SIGN_IN':
            state.currentUser = action.payload;
            state.user = true;
            localStorage.setItem("cryptoCurrencyUserDetails", JSON.stringify(state));  
            return state;
        case 'LOGOUT':
            state.user = false;
            state.currentUser = 'admin';
            localStorage.setItem("cryptoCurrencyUserDetails", JSON.stringify(state));  
            return state;
        default: return state;
    }
}

export default rootReducer