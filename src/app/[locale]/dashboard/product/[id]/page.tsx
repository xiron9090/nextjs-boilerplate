// utils
import axios, { endpoints } from '@/utils/axios';
// sections
import { ProductDetailsView } from '@/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Product Details',
};

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailsPage({ params }: Props) {
  const { id } = params;

  return <ProductDetailsView id={id} />;
}

export async function generateStaticParams() {
  const res = await axios.get(endpoints.product.list);

  return res.data.products.map((product: { id: string }) => ({
    id: product.id,
  }));
}
