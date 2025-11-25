import { lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

// Lazy load the remote micro-frontends
const Dashboard = lazy(() => import('dashboard/Remote'));
const Invoices = lazy(() => import('invoices/Remote'));

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">My Micro-Frontend App</h1>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto">
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-blue-600 hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/invoices" className="text-blue-600 hover:underline">
                Invoices
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Welcome to the Host Application
                  </h2>
                  <p>
                    This is the shell application that loads micro-frontends
                    dynamically.
                  </p>
                </div>
              }
            />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/invoices/*" element={<Invoices />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
