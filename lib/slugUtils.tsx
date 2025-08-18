/**
 * Utility functions for slug formatting and management
 */

/**
 * Converts a string to a URL-friendly slug
 * @param text - The text to convert to a slug
 * @returns A clean, hyphenated slug
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Decode URL-encoded characters first
    .replace(/%20/g, ' ')
    .replace(/%2D/g, '-')
    .replace(/%2E/g, '.')
    .replace(/%5F/g, '_')
    // Replace spaces and special characters with hyphens
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Formats an existing slug to ensure it's clean and consistent
 * @param slug - The existing slug to format
 * @returns A properly formatted slug
 */
export function formatSlug(slug: string): string {
  console.log('formatSlug input:', slug)
  const result = createSlug(decodeURIComponent(slug))
  console.log('formatSlug output:', result)
  return result
}

/**
 * Generates a unique slug by appending a number if the base slug already exists
 * @param baseSlug - The base slug to make unique
 * @param existingSlugs - Array of existing slugs to check against
 * @returns A unique slug
 */
export function generateUniqueSlug(baseSlug: string, existingSlugs: string[]): string {
  let uniqueSlug = baseSlug
  let counter = 1
  
  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${counter}`
    counter++
  }
  
  return uniqueSlug
}
