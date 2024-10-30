import "./style.css"

function ProductCard(props) {
    return(
<>
        {/* <article className="article"> */}
        <article className="article">
            <figure className="containerImg">
                <img src={props.image} alt="" />
                <div className="off">
                    <p>{props.descontooff}</p>
                </div>
            </figure>

            <section className="cardSection" >
                <h4>{props.title}</h4>
                <h5>{props.nomeProduto}</h5>
                <div className="priceCard">
                    <p className="price">{props.preco}</p>
                    <p className="pricedesconto">{props.precodesconto}</p>
                </div>
            </section>
        </article>
    </>
    )
    
}

export default ProductCard;