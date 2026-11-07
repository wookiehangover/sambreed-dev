#!/usr/bin/env node

/**
 * Demonstrates the route lookup issue with .html.md files
 */

console.log('Route Lookup Problem:\n');

console.log('File: src/content/writing/tragic-design-is.html.md');
console.log('Frontmatter: slug: tragic-design-is.html');
console.log('Collection ID (from glob): tragic-design-is.html');
console.log('\n');

console.log('When user requests /writing/tragic-design-is.html:');
console.log('  1. Redirect configured: /writing/tragic-design-is.html → /writing/tragic-design-is');
console.log('  2. User now at: /writing/tragic-design-is');
console.log('  3. [...slug].astro receives slug = "tragic-design-is"');
console.log('  4. Calls getEntry("writing", "tragic-design-is")');
console.log('  5. ❌ Not found! Collection ID is "tragic-design-is.html"');
console.log('\n');

console.log('Solution: [...slug].astro needs to try both:');
console.log('  1. getEntry("writing", slug) // try without .html');
console.log('  2. If not found, getEntry("writing", slug + ".html") // try with .html');
console.log('\n');

console.log('Or remove slug frontmatter and let Astro use the full ID.');
