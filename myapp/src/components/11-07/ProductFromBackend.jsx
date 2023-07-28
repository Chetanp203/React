import React, { useEffect, useState } from 'react'
import './ProductFromBackend.css'
import { useNavigate } from 'react-router';
import "./../Home.css"


const ProductFromBackend = () => {

    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
        // .then(json => console.log(json))
    }, [])

    const redirect = (id) => {
        // console.log(id,"-id")
        // alert('working..')
        router(`/product/${id}`)

    }
    return (
        <div>
            <div className="nav1">
                <ul>
                    <li><b>CATEGORIES</b></li>
                    <li style={{color:'gold'}}><b>LUXE</b></li>
                    <li><b>BARGAINS</b></li>
                    <li><b>STYLE HUB</b></li>
                </ul>
            </div>
            <div className="nav2">
                <ul>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>BEAUTY</li>
                    <li>WATCHES</li>
                    <li>KIDS</li>
                    <li>HOMESTOP</li>
                    <li>GIFTS</li>
                    <li>BRANDS</li>
                </ul>
            </div>



            <p>Home/  Men  /Clothing</p>
            <div className="clothes">
                <div className="head-s">
                    <h2><em>Men's Clothing</em></h2>
                    <h4>28319 products</h4>
                    <button>SORT BY: POPULAR</button>
                </div>
                <div className="prods">
                    <div className="prod-1">
                        
                      <div>
                      <h4>CATEGORIES</h4>
                        <input type="checkbox" />
                        <label>ACCESSORIES(1,004)</label><br />
                        <input type="checkbox" />
                        <label>ETHNIC WEAR(2,898)</label><br />
                        <input type="checkbox" />
                        <label>INNERWEAR(1,004)</label><br />
                        <input type="checkbox" />
                        <label>JACKETS(1,004)</label><br />
                        <input type="checkbox" />
                        <label>JEANS(1,004)</label><br />
                      </div>
                      
                      <div>
                      <h4>SUB-CATEGORIES</h4>
                        <input type="checkbox" />
                        <label>BOTTOMWEAR(1,004)</label><br />
                        <input type="checkbox" />
                        <label>BOXERS(2,898)</label><br />
                        <input type="checkbox" />
                        <label>BREIFS & TRUNKS(1,004)</label><br />
                        <input type="checkbox" />
                        <label>CAPS & HATS(1,004)</label><br />
                        <input type="checkbox" />
                        <label>CASUAL SHIRTS(1,004)</label><br />
                      </div>
                      
                      <div>
                      <h4>BRANDS</h4>
                        <input type="checkbox" />
                        <label>ADDON(1,004)</label><br />
                        <input type="checkbox" />
                        <label>ADIDAS(2,898)</label><br />
                        <input type="checkbox" />
                        <label>AEROPOSTALE(1,004)</label><br />
                        <input type="checkbox" />
                        <label>ALCIS(1,004)</label><br />
                        <input type="checkbox" />
                        <label>ALLEN SOLLY(1,004)</label><br />
                      </div>
                      
                      
                       
                        

                    </div>
                    <div className="prod-2">

                        {products.length ?
                            <div className="products">
                                {products.map((pro) => (
                                    <div className="product-card" onClick={() => redirect(pro.id)}>
                                        <img src={pro.image} />
                                        {/* <p><b>ID :</b>{pro.id}</p> */}
                                        <h3>{pro.title}</h3>
                                        <p>{pro.category}</p>
                                        <span>₹{pro.price}<strike style={{color:'grey'}}>₹{pro.price}</strike><span style={{color:'orange'}}>50% off</span></span>
                                    </div>

                                ))}

                            </div>
                            :
                            <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47m700mutgull7h7bmua0nussja7i9urrh9so7r4g7&ep=v1_gifs_search&rid=giphy.gif&ct=g" style={{ width: 550, height: 550, marginLeft: 400 }} />
                        }



                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProductFromBackend