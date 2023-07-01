import { useParams } from "react-router";

function SingleProduct(){

    const data= useParams();
    console.log(data,"-data here");
    return(
        <div>
            {data && data.chetan}
        </div>
    )
}
export default SingleProduct;