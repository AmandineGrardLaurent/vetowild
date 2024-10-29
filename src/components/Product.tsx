import { productType } from "../lib/definition";

function Product({
	product,
}: {
	product: productType;
}) {
	return (
		<section>
			<article>
				<img src={product.image} alt={product.name} width="180px" />
				<h2>{product.name}</h2>
				<h3>Animal : {product.animal}</h3>
				<h3>Prix : {product.price}€</h3>
				<button type="button">Plus de détails</button>
			</article>
		</section>
	);
}

export default Product;
