import { createContext ,useReducer} from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const initialState = {user: null};

function reducer(state, action){
    switch(action.type){
        case "login":
            return{user: action.payload}
            case"logout":
            return{user: null}
            default:
                return state;
    }
}

const AuthProvider = ({children}) => {
     const [state, dispatch] = useReducer(reducer, initialState);

       // useEffect(()=>{
    //   async  function getCurrentUserData(){
    //       let token = JSON.parse(localStorage.getItem("token"));
    //       const response = await axios.post("http://localhost:8001/get-current-user",{token});
    //       if(response.data.success){
    //         dispatch({
    //             type: "login",
    //             payload: response.data.user
    //         })
    //       }else{
    //         dispatch({
    //             type:"logout",
    //         });
    //       }
    //     }
    //     getCurrentUserData();
    // },[])

   return (
    <AuthContext.Provider value={{state, dispatch}}>
        {children}

    </AuthContext.Provider>
   )
}
export default AuthProvider;