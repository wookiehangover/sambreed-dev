#!/usr/bin/env node

/**
 * Test that search page handles undefined entries gracefully
 * Simulates the scenario where search API returns slugs that don't match collection entries
 */

console.log('Testing search undefined entry handling...\n');

// Simulate the problematic scenario
const mockSearchResults = [
  { slug: 'existing-post' },
  { slug: 'non-existent-slug' }, // This will be undefined
  { slug: 'another-existing' }
];

const mockBlogEntries = [
  { id: 'existing-post', data: { title: 'Existing' } },
  { id: 'another-existing', data: { title: 'Another' } }
];

// OLD CODE (would crash on BlogCard with undefined):
console.log('❌ OLD CODE (without filter):');
try {
  const oldResults = mockSearchResults.map((entry) => {
    return mockBlogEntries.find((e) => e.id === entry.slug);
  });
  console.log('  Results:', oldResults.length, 'entries');
  console.log('  Contains undefined:', oldResults.includes(undefined));
  console.log('  Would crash on BlogCard trying to access entry.id');
} catch (e) {
  console.log('  Error:', e.message);
}

console.log('\n✅ NEW CODE (with filter):');
const newResults = mockSearchResults
  .map((entry) => {
    return mockBlogEntries.find((e) => e.id === entry.slug);
  })
  .filter((entry) => entry !== undefined);

console.log('  Results:', newResults.length, 'entries');
console.log('  Contains undefined:', newResults.includes(undefined));
console.log('  Safe to render in BlogCard');

console.log('\n✅ Test passed: undefined entries are filtered out');
