import React from "react";
import Item from "./Item";

const ItemList = ({data=[]}) => {
   return(
    data.map(ropa => (<Item key={ropa.id} info={ropa} />))
   );
}


export default ItemList;