"use client";

import { useCart } from "@/context/ShoppingContext";
import { Button } from "@mui/material";

const arr=[
    {id: 1,img : "https://exclusivelane.com/cdn/shop/products/EL-002-140_A.jpg?v=1581072566", price:2000},
        {id:2,img:"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25911010/2023/12/21/c9139c15-ca43-48ce-8ddb-84968d2545981703152023940-ArtVibes-Green--Blue-Warli-Art-Wooden-Wall-Hanging-684170315-1.jpg",price: 3000},
        {id:3,img : "https://m.media-amazon.com/images/I/81hTQVsj7DL.jpg",price:1000},
        {id:4,img:"https://bearmind.in/cdn/shop/files/Untitleddesign_d8d567d6-e420-417f-81a6-b42a660a8dcd.png?v=1717668671",price:2400}
   
]

export default function ShoppingComponent()
{
    const {cart, Add, remove, totalPrice} = useCart();
 const ShoppingStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginLeft: 20,
  marginRight:20
};
    return(<>
    <h1>Hello</h1>
    <div style={ShoppingStyle}>
    {
        arr.map((data, id)=>(
            <div key={id} style={{margin: 2, width: 440, height: 500,backgroundColor:"rgb(228, 223, 225)" , padding:20}} >
                <img src={data.img} style={{width: 400, height: 400,backgroundColor:"rgb(190, 185, 187)"}}/>
                <p> Price: {data.price}</p>
                <Button variant="contained" onClick={()=>Add({...data, count: 1})}>AddToCart</Button>
            </div>
        ))
    }
    
    </div>
    <h1>Cart items: Price: {totalPrice}</h1>
    <div style={ShoppingStyle}>{cart.map((item, index) => (
  <div key={index} style={{margin: 2, width: 340, height: 450, backgroundColor:"rgb(190, 185, 187)",padding:20}}>
    <img src={item.img} style={{ width: 300, height: 300 }} />
    <p>Price: {item.price}</p>
    <p>Quantity: {item.count}</p>
    <Button variant="contained" onClick={()=>remove(item.id)}>RemoveFromCart</Button>
  </div>
))}</div>
    </>)
}