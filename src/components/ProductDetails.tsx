import { productType } from "../lib/definition";

function ProductDetails({ product }: { product: productType }) {
	return (
		<div>
			<h3>Descriptif du produit</h3>
			<img src={product.image} alt={product.name} width="150px" />
			<h4>{product.name}</h4>
			<h4>{product.price}€</h4>
			<p>{product.description}</p>
		</div>
	);
}

export default ProductDetails;
