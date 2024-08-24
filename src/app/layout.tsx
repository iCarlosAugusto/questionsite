'use client';
import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import '@/css/satoshi.css';
import '@/css/style.css';
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Loader from '@/components/common/Loader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const queryClient = new QueryClient();
  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryClientProvider client={queryClient}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {loading ? <Loader /> : children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
