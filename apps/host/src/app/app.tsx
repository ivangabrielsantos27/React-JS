// import { BrowserRouter } from 'react-router-dom';
// import { AppRoutes } from './router/routes';

// export function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-neutral-5">
//         <header className="bg-tangBlue-50 text-white p-4">
//           <h1>My Micro-Frontend App</h1>
//         </header>
//         <main className="container mx-auto p-4">
//           <AppRoutes />
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Link } from 'react-router-dom';
import { AppRoutes } from './router/routes';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">My Micro-Frontend App</h1>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-white shadow-sm p-4">
          <div className="container mx-auto">
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/invoices"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Invoices
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto p-8">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
