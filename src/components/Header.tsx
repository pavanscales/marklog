
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-20 border-b border-gray-100">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <svg className="w-8 h-8 mr-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z" />
          </svg>
          zenblog
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        <Link to="#docs" className="text-gray-600 hover:text-gray-900">Docs</Link>
        <Link to="#blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link to="#signin" className="text-gray-600 hover:text-gray-900">Sign in</Link>
        <Link to="#signup" className="text-gray-600 hover:text-gray-900">Sign up</Link>
      </div>
    </header>
  );
};

export default Header;
