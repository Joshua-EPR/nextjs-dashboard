import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { fetchLatestInvoices, fetchRevenue } from '../lib/data';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import { fetchCardData } from '../lib/data';
import CardWrapper from '@/app/ui/dashboard/cards';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
import { Suspense } from 'react';
export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Suspense fallback={<CardsSkeleton />}>
        <div>
          <CardWrapper />
        </div>
      </Suspense>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart  />
        <LatestInvoices />
      </div>
    </main>
  );
}