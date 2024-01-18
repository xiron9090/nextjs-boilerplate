'use client';

// auth
// import { AuthGuard } from '@/auth/guard';
// components
import DashboardLayout from '@/layouts/dashboard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    // <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    // </AuthGuard>
  );
}
