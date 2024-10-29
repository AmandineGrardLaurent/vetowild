import { useState } from "react";
import "./App.css";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetails from "./components/ProductDetails";
import ProductFilter from "./components/ProductFilter";
import data from "./assets/data/data.json";
import { productType } from "../lib/definition";

function App() {
	const productList: productType = data;
	const productNames: string[] = productList.map((p) => p.name);
	// filtres
	const [products, setProduct] = useState(productList);
	// description
	const [productCheck, setProductCheck] = useState(productNames[0]);

	return (
		<main>
			<h1>VetoWild</h1>
			<ProductFilter setProduct={setProduct} products={products} />
			<ProductCatalog product={products} />
			<section>
				<ProductDetails product={products[0]} />
			</section>
		</main>
	);
}

export default App;
