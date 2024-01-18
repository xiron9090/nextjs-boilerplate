'use client';

// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from '@/routes/paths';
// _mock
import { _jobs } from '@/_mock';
// components
import { useSettingsContext } from '@/components/settings';
import CustomBreadcrumbs from '@/components/custom-breadcrumbs';
//
import JobNewEditForm from '../job-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function JobEditView({ id }: Props) {
  const settings = useSettingsContext();

  const currentJob = _jobs.find((job) => job.id === id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Job',
            href: paths.dashboard.job.root,
          },
          { name: currentJob?.title },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <JobNewEditForm currentJob={currentJob} />
    </Container>
  );
}
