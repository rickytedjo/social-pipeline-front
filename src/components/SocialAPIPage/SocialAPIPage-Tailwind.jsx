import React from 'react';

export default function SocialAPIPageTailwind() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="h-14 bg-white border-b border-gray-200 flex items-center justify-center shadow-sm">
        <h1 className="text-lg font-bold text-blue-600" style={{ letterSpacing: '-0.4px' }}>
          Social API
        </h1>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        {/* Centered Box */}
        <div className="w-full max-w-md bg-white rounded-xl border border-gray-300 shadow-lg p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Social API</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Your gateway to social media integration and data management. Build powerful applications with our comprehensive API.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors duration-150">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
