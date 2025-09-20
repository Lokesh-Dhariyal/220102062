
import React, { useState } from 'react';

export function HomePage() {
  const [url, setUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate shortener logic (replace with backend call as needed)
    if (url && shortCode) {
      setShortenedUrl(`${window.location.origin}/${shortCode}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-8 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="url"
          placeholder="Enter your URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Enter short code"
          value={shortCode}
          onChange={e => setShortCode(e.target.value)}
          required
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button type="submit" className="py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors">
          Shorten URL
        </button>
      </form>
      {shortenedUrl && (
        <div className="mt-8 p-4 bg-gray-100 rounded text-center">
          <span className="font-semibold">Shortened URL:</span>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 underline break-all"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
