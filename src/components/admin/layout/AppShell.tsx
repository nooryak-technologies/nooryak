'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/admin/AuthContext';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface AppShellProps {
  children: React.ReactNode;
  title: string;
  breadcrumb: string;
}

export function AppShell({ children, title, breadcrumb }: AppShellProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/auth/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#ff3d00] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white/60 font-medium animate-pulse">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <Sidebar />
      <div className="ml-[260px] flex-1 min-h-screen flex flex-col">
        <Topbar title={title} breadcrumb={breadcrumb} />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
