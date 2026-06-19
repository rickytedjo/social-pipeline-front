"use client";
import React, { useState } from 'react';

export default function SocialAPIPage() {
  const [resultText, setResultText] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleRequest() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/request-result');
      const payload = await response.json();

      if (!response.ok) {
        setError(payload.error || 'Failed to fetch result.');
      } else {
        const value = payload.result ?? 'No result returned.';
        setResultText(typeof value === 'string' ? value : JSON.stringify(value, null, 2));
      }
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : 'Unknown error.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: "'Sora', sans-serif", backgroundColor: '#f5f6fa' }} className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e8eaf0',
          height: '56px',
        }}
        className="flex items-center justify-center px-6 shadow-sm"
      >
        <h1
          style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2d3bde',
            letterSpacing: '-0.4px',
          }}
        >
          Social Pipe
        </h1>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        {/* Centered Box: heading, readonly textarea, button */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            padding: '32px',
            maxWidth: '640px',
            width: '100%',
          }}
          className="text-center"
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '12px',
            }}
          >
            AI Insight
          </h2>

          <textarea
            readOnly
            disabled
            aria-readonly="true"
            tabIndex={-1}
            value={resultText}
            style={{
              width: '100%',
              minHeight: '160px',
              resize: 'none',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              backgroundColor: '#f9fafb',
              color: '#374151',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace',
              marginBottom: '16px',
            }}
          />

          {error ? (
            <p style={{ color: '#dc2626', marginBottom: '12px' }}>{error}</p>
          ) : null}

          <button
            type="button"
            onClick={handleRequest}
            style={{
              backgroundColor: '#2d3bde',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.15s',
              opacity: loading ? 0.7 : 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1f28a6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2d3bde')}
            disabled={loading}
          >
            {loading ? 'Loading…' : 'Request'}
          </button>
        </div>
      </main>
    </div>
  );
}
