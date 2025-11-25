import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('dashboard/Remote'));
const Invoices = lazy(() => import('invoices/Remote'));

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/invoices/*" element={<Invoices />} />
      </Routes>
    </Suspense>
  );
}
