// _mock
import { _orders } from '@/_mock/_order';
// sections
import { OrderDetailsView } from '@/sections/order/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Order Details',
};

type Props = {
  params: {
    id: string;
  };
};

export default function OrderDetailsPage({ params }: Props) {
  const { id } = params;

  return <OrderDetailsView id={id} />;
}

export async function generateStaticParams() {
  return _orders.map((order) => ({
    id: order.id,
  }));
}
