// _mock
import { _invoices } from '@/_mock/_invoice';
// sections
import { InvoiceDetailsView } from '@/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Invoice Details',
};

type Props = {
  params: {
    id: string;
  };
};

export default function InvoiceDetailsPage({ params }: Props) {
  const { id } = params;

  return <InvoiceDetailsView id={id} />;
}

export async function generateStaticParams() {
  return _invoices.map((invoice) => ({
    id: invoice.id,
  }));
}
