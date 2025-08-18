'use client'

import { useState } from 'react'
import { createSlug, formatSlug, generateUniqueSlug } from '@/lib/slugUtils'

export default function SlugDemoPage() {
  const [inputText, setInputText] = useState('Si estaremos juntos')
  const [urlEncodedSlug, setUrlEncodedSlug] = useState('Si%20estaremos%20juntos')
  const [existingSlugs, setExistingSlugs] = useState('my-post\nanother-post\nmy-post-2')

  const cleanSlug = createSlug(inputText)
  const formattedSlug = formatSlug(urlEncodedSlug)
  const uniqueSlug = generateUniqueSlug('my-post', existingSlugs.split('\n').filter(s => s.trim()))

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Slug Formatting Demo</h1>
          <p className="text-xl text-gray-600">
            See how our slug utilities convert various text inputs to clean, URL-friendly slugs
          </p>
        </div>

        <div className="space-y-8">
          {/* Basic Slug Creation */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Basic Slug Creation</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Input Text:
                </label>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter text to convert to slug..."
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-sm text-gray-600 mb-1">Generated Slug:</div>
                <div className="font-mono text-lg text-gray-900">{cleanSlug}</div>
              </div>
            </div>
          </div>

          {/* URL-encoded Slug Formatting */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">URL-encoded Slug Formatting</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL-encoded Slug:
                </label>
                <input
                  type="text"
                  value={urlEncodedSlug}
                  onChange={(e) => setUrlEncodedSlug(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter URL-encoded slug..."
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-sm text-gray-600 mb-1">Formatted Slug:</div>
                <div className="font-mono text-lg text-gray-900">{formattedSlug}</div>
              </div>
            </div>
          </div>

          {/* Unique Slug Generation */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Unique Slug Generation</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Existing Slugs (one per line):
                </label>
                <textarea
                  value={existingSlugs}
                  onChange={(e) => setExistingSlugs(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter existing slugs..."
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-sm text-gray-600 mb-1">Generated Unique Slug:</div>
                <div className="font-mono text-lg text-gray-900">{uniqueSlug}</div>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Conversions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-gray-600">"Hello World!" →</div>
                <div className="font-mono text-gray-900">{createSlug('Hello World!')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">"My Post & Article" →</div>
                <div className="font-mono text-gray-900">{createSlug('My Post & Article')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">"C++ Programming" →</div>
                <div className="font-mono text-gray-900">{createSlug('C++ Programming')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">"Si%20estaremos%20juntos" →</div>
                <div className="font-mono text-gray-900">{formatSlug('Si%20estaremos%20juntos')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
