import './style.css';
import ProductCard from '../ProductCard/ProductCard';
// import tenis from '../../../public/tenis.png'
import tenis from '../../assets/tenis.png';

function ProductListing(props) {
    return(
    <>
        <div className="productListing">
        {[...Array(10)].map((_, index) => (
                <ProductCard
                    key={index}
                    image={props.product.image}
                    descontooff={props.product.descontooff}
                    title={props.product.title}
                    nomeProduto={props.product.nomeproduto}
                    preco={props.product.preco}
                    precodesconto={props.product.precodesconto}
                />
            ))} 

        </div>

    </>)
}

export default ProductListing;