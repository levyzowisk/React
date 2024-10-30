import './style.css';
import ProductCard from '../ProductCard/ProductCard';
// import tenis from '../../../public/tenis.png'
import tenis from '../../assets/tenis.png'
const Product = [ {
    image: tenis,
    descontooff: "30% OFF",
    title: "Tênis",
    nomeproduto: "K-Swiss V8 - Masculino",
    preco: "$200",
    precodesconto: "$100",
  

},
{
    image: tenis,
    descontooff: "30% OFF",
    title: "Tênis",
    nomeproduto: "K-Swiss V8 - Masculino",
    preco: "$200",
    precodesconto: "$100",
  

},
{
    image: tenis,
    descontooff: "30% OFF",
    title: "Tênis",
    nomeproduto: "K-Swiss V8 - Masculino",
    preco: "$200",
    precodesconto: "$100",
  

},
{
    image: tenis,
    descontooff: "30% OFF",
    title: "Tênis",
    nomeproduto: "K-Swiss V8 - Masculino",
    preco: "$200",
    precodesconto: "$100",
  

},

]
function ProductListing() {
    return(
    <>
        <div className="productListing">
                {  Product.map((objeto,index) => (
                    <ProductCard
                        key={index}
                        image={objeto.image}
                        descontooff={objeto.descontooff}
                        title={objeto.title}
                        nomeProduto={objeto.nomeproduto}
                        preco={objeto.preco}
                        precodesconto={objeto.precodesconto}
        
                    />
                ))  }

        </div>
    </>)
}

export default ProductListing;