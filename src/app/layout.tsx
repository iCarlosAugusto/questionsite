'use client';
import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import '@/css/satoshi.css';
import '@/css/style.css';
import React, { useEffect, useState } from 'react';

import Loader from '@/components/common/Loader';
import { NextUIProvider } from '@nextui-org/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" className="bg-whiten">
      <body suppressHydrationWarning={true}>
        <NextUIProvider>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {loading ? <Loader /> : children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
