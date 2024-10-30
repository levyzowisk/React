import "./style.css"


function ProductCard(props) {
    return(
<>
        <article>
            <figure className="containerImg">
                <img src={props.image} alt="" />
                <div className="off">
                    <p>{props.descontooff}</p>
                </div>
            </figure>

            <section className="cardSection" >
                <h4>{props.title}</h4>
                <p>{props.nomeProduto}</p>
                <div className="priceCard">
                    <p>{props.preco}</p>
                    <p>{props.precodesconto}</p>
                </div>
            </section>
        </article>
    </>
    )
    
}

export default ProductCard;