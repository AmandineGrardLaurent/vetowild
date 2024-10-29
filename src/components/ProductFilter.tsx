import { productType } from "../lib/definition";

function ProductFilter({
	setProduct,
	products,
}: {
	setProduct: (product: string) => void;
	products: productType;
}) {
	const handleClickCat = () => {
		setProduct(products.filter((p) => p.animal === "chat"));
	};

	const handleClickDog = () => {
		setProduct(products.filter((p) => p.animal === "chien"));
	};

	const handleClickRabbit = () => {
		setProduct(products.filter((p) => p.animal === "lapin"));
	};

	return (
		<nav>
			<button type="button" onClick={handleClickCat}>
				Chat
			</button>
			<button type="button" onClick={handleClickDog}>
				Chien
			</button>
			<button type="button" onClick={handleClickRabbit}>
				Lapin
			</button>
		</nav>
	);
}

export default ProductFilter;
