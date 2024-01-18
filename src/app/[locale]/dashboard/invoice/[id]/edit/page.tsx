// _mock
import { _invoices } from '@/_mock/_invoice';
// sections
import { InvoiceEditView } from '@/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Invoice Edit',
};

type Props = {
  params: {
    id: string;
  };
};

export default function InvoiceEditPage({ params }: Props) {
  const { id } = params;

  return <InvoiceEditView id={id} />;
}

export async function generateStaticParams() {
  return _invoices.map((invoice) => ({
    id: invoice.id,
  }));
}
