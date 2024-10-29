import Product from "./Product";
import { productType } from "../lib/definition";

function ProductCatalog({
	product,
}: {
	product: productType;
}) {
	return (
		<section>
			{product.map((produit) => (
				<Product product={produit} key={produit.name} />
			))}
		</section>
	);
}

export default ProductCatalog;
