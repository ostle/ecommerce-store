import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard(
		"1588a862-09a2-4231-8880-651e01e8995b"
	);

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
				<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
					<ProductList title='Featured Products' items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
