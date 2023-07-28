import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";
import "./Home.css"

function Home() {
    const { state, login, logout } = useContext(AuthContext);
    // console.log(state,"state from context in home")
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        if (state?.user?.email) {
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
    }, [state])


    return (
        <div className="container">
          {/* <div>
                {isUserLoggedIn ? <button onClick={() => logout()} style={{ padding: '10px 20px', fontSize: '20px' }}>Logout</button> : <button onClick={() => router("/login")}>Login</button>}
            </div> */}
            <div className="nav1">
                <ul>
                    <li onClick={()=> router('/product-from-backend')}><b>CATEGORIES</b></li>
                    <li onClick={()=> router('/product-from-backend')} style={{color:'gold'}}><b>LUXE</b></li>
                    <li onClick={()=> router('/product-from-backend')}><b>BARGAINS</b></li>
                    <li onClick={()=> router('/product-from-backend')}><b>STYLE HUB</b></li>
                </ul>
            </div>
            <div className="nav2">
                <ul>
                    <li onClick={()=> router('/product-from-backend')}>MEN</li>
                    <li onClick={()=> router('/product-from-backend')}>WOMEN</li>
                    <li onClick={()=> router('/product-from-backend')}>BEAUTY</li>
                    <li onClick={()=> router('/product-from-backend')}>WATCHES</li>
                    <li onClick={()=> router('/product-from-backend')}>KIDS</li>
                    <li onClick={()=> router('/product-from-backend')}>HOMESTOP</li>
                    <li onClick={()=> router('/product-from-backend')}>GIFTS</li>
                    <li onClick={()=> router('/product-from-backend')}>BRANDS</li>
                </ul>
            </div>
            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h47/hda/30416999219230/Strip-Banner-Web--2023-07--17-new-hp-page-flat50.jpg" />
            </div>
            <div className="banner-2">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hf2/h13/30477648166942/private-brand_top-banner-web_eoss-2023.jpg" />
            </div>
            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h1b/hf7/29782554771486/Icons-2-App----000-new-home-page--2023-apri--msite--l-1111.jpg" />
            </div>
            
            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h1b/h5d/30369242710046/Strip-Web-1840x250_100723.jpg" />
            </div>
            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h13/h1a/30162823741470/Featured-Brands_Strip-app_er456.jpg" />
            </div>

            <div className="banner-2">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h55/hd6/30333497901086/varanga-web_050723.jpg" />
            </div>

            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h52/h3a/30444789825566/Trending-Brand-Deals%21_Strip-web_eoss-2023.jpg" />
            </div>

            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hd4/hcf/30444790448158/Coverstory---carousel-Web_eoss-2023.jpg" />
            </div>
            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h9b/h60/30425874759710/Masterpieces-Of-Time_Strip-web_eoss-2023.jpg" />
            </div>

            <div className="banner-3">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h8d/h7b/30434302001182/armani-exchange_4-Widgets-Web--revise-banner-2023-07-19-home-page.jpg"  />
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h3b/h7c/30434302066718/Casio_4-Widgets-Web_revise-banner-2023-07-19-home-page.jpg"  />
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h4c/h7f/30434302132254/Emporio-Armani_4-Widgets-Web_revise-banner-2023-07-19-home-page.jpg"  />
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hed/he9/30477653803038/titan_4-Widgets-Web__watch98594.jpg"  />
            </div>

            <div className="banner-1">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h04/h2b/30434628829214/Rush-hour-madness-web---2023-07-21-new-strip--msite.gif" />
            </div>


            <div className="banner-3">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h05/hed/30434646556702/adidas_rush-hour-4-widget-web--rush-hour-sale-2023-07-22.gif"  />
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h5c/hed/30434646589470/madame_rush-hour-4-widget-web-----rush-hour-sale-2023-07-22.gif"  />
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h16/hf0/30434646622238/fastrack_rush-hour-4-widget-web----rush-hour-sale-2023-07-22.gif"  />
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h98/h4c/30434648195102/lakme_rush-hour-4-widget-web_240723m.gif"  />
            </div>
            
        </div>
    )
}

export default Home;