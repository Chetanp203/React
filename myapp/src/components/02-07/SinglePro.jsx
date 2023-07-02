import React from 'react'
import { useParams } from 'react-router';

export const SinglePro = () => {
    const data = useParams();
    console.log(data,"-data");
  return (
    <div>
        <h1>Single Product</h1>
        <h2>{data.id && data.id}</h2>

    </div>
  )
}
export default SinglePro;
