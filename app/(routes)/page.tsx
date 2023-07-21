import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard(
		"aaca9143-0d3c-4124-9f86-eb60f4e865d7"
	);

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />
			</div>
		</Container>
	);
};

export default HomePage;
