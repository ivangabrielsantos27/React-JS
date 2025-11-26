import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to the Host Application
      </h2>
      <p className="text-gray-700 mb-6">
        This is the shell application that loads micro-frontends dynamically.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-900 mb-2 font-semibold">Navigate to:</p>
        <ul className="list-disc list-inside space-y-1 text-blue-700">
          <li>
            <Link to="/dashboard" className="hover:underline font-medium">
              Dashboard
            </Link>{' '}
            - View your dashboard
          </li>
          <li>
            <Link to="/invoices" className="hover:underline font-medium">
              Invoices
            </Link>{' '}
            - Manage invoices
          </li>
        </ul>
      </div>
    </div>
  );
}
