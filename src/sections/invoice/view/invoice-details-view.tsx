'use client';

// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from '@/routes/paths';
// _mock
import { _invoices } from '@/_mock';
// components
import { useSettingsContext } from '@/components/settings';
import CustomBreadcrumbs from '@/components/custom-breadcrumbs';
//
import InvoiceDetails from '../invoice-details';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function InvoiceDetailsView({ id }: Props) {
  const settings = useSettingsContext();

  const currentInvoice = _invoices.filter((invoice) => invoice.id === id)[0];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={currentInvoice?.invoiceNumber}
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Invoice',
            href: paths.dashboard.invoice.root,
          },
          { name: currentInvoice?.invoiceNumber },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InvoiceDetails invoice={currentInvoice} />
    </Container>
  );
}
