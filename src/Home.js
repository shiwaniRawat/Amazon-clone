import React from 'react'
import Category from './Category'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Unrec_PC_Hero_1x._CB417682744_.jpg' alt=""/>
                <div className='home__row'>
          <Category
            id='1000'
            title='Amazon Basics'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
            link='See more'
          />
          <Category
            id='1001'
            title='Computer & Acessories'
            image='https://images-na.ssl-images-amazon.com/images/I/81pG6xR8dnL._AC_SL1500_.jpg'
            link='See more'
          />
          <Category
            id='1002'
            title='Get fit at home'
            image='https://images-na.ssl-images-amazon.com/images/I/51FxE1LMBKL._AC_SL1000_.jpg'
            link='See more'
          />
          <Category
            id='1003'
            title='Video Games'
            image='https://images-na.ssl-images-amazon.com/images/I/61tl4Go6rqL._AC_SL1100_.jpg'
            link='See more'
          />

          {/* Product */}
          {/* Product */}
        </div>
                <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
            <Product
            id='49053580'
            title='
            Roll over image to zoom in
            bopmen S40 Active Noise Cancelling Bluetooth Headphones - Wireless ANC Over Ear Headphones, Stereo Sound Headphones '
            price={99.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61o-AamwyEL._AC_SL1000_.jpg'
            rating={3}
          />

          <Product
            id='49053570'
            title='
            Bowflex SelectTech 552 - Two Adjustable Dumbbells'
            price={399.99}
            image='https://images-na.ssl-images-amazon.com/images/I/816lKIQ3C8L._AC_SL1500_.jpg'
            rating={5}
          />
        </div>
            </div>
        </div>
    )
}

export default Home
