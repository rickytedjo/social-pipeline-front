"use client";
import React from 'react';

export default function SocialAPIPage() {
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
          Social API
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
            Example Request
          </h2>

          <textarea
            readOnly
            disabled
            aria-readonly="true"
            tabIndex={-1}
            value={"{\n  \"example\": \"This textarea is read-only and not interactable.\"\n}"}
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

          <button
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1f28a6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2d3bde')}
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
