import ProductListing from "../../Components/ProductListing/ProductListing";
import tenis from '../../assets/tenis.png';


const Product =  {
    image: tenis,
    descontooff: "30% OFF",
    title: "Tênis",
    nomeproduto: "K-Swiss V8 - Masculino",
    preco: "$200",
    precodesconto: "$100",
}

function HomePage() {
    return(

    <>
  
        <ProductListing product={Product}/>
        {/* <ProductListing/> */}

    </>
    )

}

export default HomePage;;