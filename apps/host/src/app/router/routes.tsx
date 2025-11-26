// import { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';

// const Dashboard = lazy(() => import('dashboard/Remote'));
// const Invoices = lazy(() => import('invoices/Remote'));

// export function AppRoutes() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <h2>Welcome to Host App</h2>
//               <p>
//                 Navigate to <a href="/dashboard">/dashboard</a> or{' '}
//                 <a href="/invoices">/invoices</a>
//               </p>
//             </div>
//           }
//         />
//         <Route path="/dashboard/*" element={<Dashboard />} />
//         <Route path="/invoices/*" element={<Invoices />} />
//       </Routes>
//     </Suspense>
//   );
// }

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

const Dashboard = lazy(() => import('dashboard/Remote'));
const Invoices = lazy(() => import('invoices/Remote'));

export function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/invoices/*" element={<Invoices />} />
      </Routes>
    </Suspense>
  );
}
