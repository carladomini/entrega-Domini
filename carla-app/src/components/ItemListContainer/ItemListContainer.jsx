import React, {useState,useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../Item/ItemList";

const ropa = [
    {
        id: 1,
        imagen: "https://drive.google.com/drive/folders/1nNtuFWQCBEtol1HJ0KYG9vIWFCDelTlw",
        titulo: "Conjunto de algodon rojo",
        precio: 1200,
      },
      {
        id: 2,
        imagen: "https://drive.google.com/drive/folders/1nNtuFWQCBEtol1HJ0KYG9vIWFCDelTlw",
        titulo: "Conjunto de algodon blanco",
        precio: 1200,
      },
      {
        id: 3,
        imagen: "https://drive.google.com/drive/folders/1nNtuFWQCBEtol1HJ0KYG9vIWFCDelTlw",
        titulo: "Conjunto de encaje negro",
        precio: 1200,
      },
      {
        id: 4,
        imagen: "https://drive.google.com/drive/folders/1nNtuFWQCBEtol1HJ0KYG9vIWFCDelTlw",
        titulo: "Conjunto de algodon negro",
        precio: 1200,
      },
      {
        id: 5,
        imagen: "https://drive.google.com/drive/folders/1nNtuFWQCBEtol1HJ0KYG9vIWFCDelTlw",
        titulo: "Conjunto de encaje lila",
        precio: 1200,
      },
      {
        id: 6,
        imagen: "https://drive.google.com/drive/folders/1nNtuFWQCBEtol1HJ0KYG9vIWFCDelTlw",
        titulo: "Conjunto de encaje rosa claro",
        precio: 1200,
      },
    ];

const ItemListContainer = (props) => {
    const [data,setData] = useState ({});

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
              resolve(ropa);
            }, 3000);
        });
        getData.then(res => setData(res));
        
    }, [])


    const onAdd = (quantity) => {
      console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;