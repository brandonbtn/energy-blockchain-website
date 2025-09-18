#!/usr/bin/env node

// Comprehensive Website Test Script
// Tests all pages and navigation links

const pages = [
  // Main Pages
  { path: '/', name: 'Homepage' },
  { path: '/membership', name: 'Membership/Pricing' },
  { path: '/technology', name: 'Technology' },
  { path: '/ecosystem', name: 'Ecosystem' },
  { path: '/roadmap', name: 'Roadmap' },
  { path: '/team', name: 'Team' },
  { path: '/docs', name: 'Documentation' },
  { path: '/blog', name: 'Blog' },

  // Feature Pages
  { path: '/features', name: 'Features' },
  { path: '/live-stats', name: 'Live Stats' },
  { path: '/energy-trading', name: 'Energy Trading' },
  { path: '/carbon-marketplace', name: 'Carbon Marketplace' },

  // Platform Pages
  { path: '/dex', name: 'Energy DEX' },
  { path: '/validators', name: 'Validators' },

  // Auth Pages
  { path: '/login', name: 'Login' },
  { path: '/signup', name: 'Signup' },

  // Dashboard Pages (Protected)
  { path: '/dashboard', name: 'Dashboard Overview' },
  { path: '/dashboard/portfolio', name: 'Portfolio' },
  { path: '/dashboard/trading', name: 'Trading' },
  { path: '/dashboard/staking', name: 'Staking' },
  { path: '/dashboard/analytics', name: 'Analytics' },
  { path: '/dashboard/membership', name: 'Membership Management' },
  { path: '/dashboard/settings', name: 'Settings' },

  // Admin Pages
  { path: '/admin/login', name: 'Admin Login' },
  { path: '/admin/dashboard', name: 'Admin Dashboard' },

  // Company Pages
  { path: '/about', name: 'About Us' },
  { path: '/careers', name: 'Careers' },
  { path: '/press', name: 'Press Kit' },
  { path: '/community', name: 'Community' },

  // Resources
  { path: '/whitepaper', name: 'Whitepaper' },
  { path: '/developers', name: 'Developer Guide' },

  // Legal Pages
  { path: '/privacy', name: 'Privacy Policy' },
  { path: '/terms', name: 'Terms of Service' },
  { path: '/cookies', name: 'Cookie Policy' },
  { path: '/compliance', name: 'Compliance' },

  // Redirect Test
  { path: '/carbon', name: 'Carbon (redirect to /carbon-marketplace)' }
];

console.log('🔍 ENERGY Blockchain Website - Comprehensive Test Report');
console.log('=' .repeat(60));
console.log(`📊 Total Pages to Test: ${pages.length}`);
console.log('=' .repeat(60));

async function testPage(baseUrl, page) {
  try {
    const response = await fetch(baseUrl + page.path);
    const status = response.status;

    if (status === 200) {
      return { ...page, status: '✅ OK', code: status };
    } else if (status === 307 || status === 308) {
      return { ...page, status: '↪️ Redirect', code: status };
    } else if (status === 404) {
      return { ...page, status: '❌ Not Found', code: status };
    } else {
      return { ...page, status: '⚠️ Error', code: status };
    }
  } catch (error) {
    return { ...page, status: '❌ Failed', code: 'ERR' };
  }
}

async function runTests() {
  const baseUrl = 'http://localhost:3000';

  console.log('\n🚀 Starting Page Tests...\n');

  const results = {
    success: [],
    redirects: [],
    notFound: [],
    errors: []
  };

  for (const page of pages) {
    const result = await testPage(baseUrl, page);
    const statusIcon = result.status.split(' ')[0];

    console.log(`${statusIcon} ${page.path.padEnd(30)} - ${page.name}`);

    if (result.status.includes('OK')) {
      results.success.push(result);
    } else if (result.status.includes('Redirect')) {
      results.redirects.push(result);
    } else if (result.status.includes('Not Found')) {
      results.notFound.push(result);
    } else {
      results.errors.push(result);
    }

    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Summary Report
  console.log('\n' + '=' .repeat(60));
  console.log('📈 TEST SUMMARY');
  console.log('=' .repeat(60));

  console.log(`\n✅ Successful Pages: ${results.success.length}/${pages.length}`);
  console.log(`↪️ Redirects: ${results.redirects.length}`);
  console.log(`❌ Not Found: ${results.notFound.length}`);
  console.log(`⚠️ Errors: ${results.errors.length}`);

  // Detailed Issues
  if (results.notFound.length > 0) {
    console.log('\n❌ MISSING PAGES:');
    results.notFound.forEach(page => {
      console.log(`   - ${page.path} (${page.name})`);
    });
  }

  if (results.errors.length > 0) {
    console.log('\n⚠️ ERROR PAGES:');
    results.errors.forEach(page => {
      console.log(`   - ${page.path} (${page.name}) - Code: ${page.code}`);
    });
  }

  // Grade
  const successRate = (results.success.length / pages.length) * 100;
  let grade = 'F';
  if (successRate === 100) grade = 'A+';
  else if (successRate >= 95) grade = 'A';
  else if (successRate >= 90) grade = 'B';
  else if (successRate >= 80) grade = 'C';
  else if (successRate >= 70) grade = 'D';

  console.log('\n' + '=' .repeat(60));
  console.log(`🎯 WEBSITE GRADE: ${grade} (${successRate.toFixed(1)}% Success Rate)`);
  console.log('=' .repeat(60));

  // Recommendations
  if (results.notFound.length > 0 || results.errors.length > 0) {
    console.log('\n💡 RECOMMENDATIONS:');
    if (results.notFound.length > 0) {
      console.log('   • Create missing pages or fix navigation links');
    }
    if (results.errors.length > 0) {
      console.log('   • Investigate and fix server errors');
    }
  } else if (successRate === 100) {
    console.log('\n🎉 PERFECT SCORE! All pages are working correctly!');
  }

  console.log('\n✨ Test completed successfully!\n');
}

// Check if server is running
fetch('http://localhost:3000')
  .then(() => {
    console.log('✅ Development server is running on http://localhost:3000');
    runTests();
  })
  .catch(() => {
    console.log('❌ Development server is not running!');
    console.log('   Please run: npm run dev');
    console.log('   Then run this test again: node test-website.js');
  });