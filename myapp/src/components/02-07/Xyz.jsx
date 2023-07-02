import { useNavigate } from "react-router";

function Xyz(){
    const router = useNavigate();

    function goto(){
        router('/singlepro/123456')
    }
    return(
        <div>
            <button onClick={goto}>Go to next page..</button>
        </div>
    )
}
export default Xyz;