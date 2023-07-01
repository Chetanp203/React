import { useNavigate } from "react-router";

function Params(){
    const router= useNavigate();
    function goto(){
        router('/home')
    }

    return(
        <div>
            <button onClick={goto}>Go to somewhere</button>
        </div>
    )
}
export default Params;