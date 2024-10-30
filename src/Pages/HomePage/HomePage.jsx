import ProductCard from "../../Components/ProductCard/ProductCard";

const Product = {
    image: "https://www.teniscorrida.com.br/app/media/images_product/big/127487804/tenis-nike-air-max-plus-3-preto-e-cinza-masculino-adedb6a7.jpg",
    descontooff: "30",
    title: "Tênis",
    nomeproduto: "K-Swiss V8 - Masculino",
    preco: 200,
    precodesconto: 100
}

function HomePage() {
    return(

        <>
        <ProductCard image={Product.image}
            descontooff={Product.descontooff}
            title={Product.title}
            nomeproduto={Product.nomeproduto}
            preco={Product.preco}
            precodesconto={Product.precodesconto}
        />

    </>
    )

}

export default HomePage;;