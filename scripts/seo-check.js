#!/usr/bin/env node

/**
 * SEO Check Script for MaxMetall
 * Проверяет основные SEO параметры сайта
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 MaxMetall SEO Check Starting...\n');

// Цвета для консоли
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const success = (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`);
const error = (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`);
const warning = (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`);
const info = (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`);

let score = 0;
let totalChecks = 0;

function checkFile(filePath, description) {
  totalChecks++;
  if (fs.existsSync(filePath)) {
    success(`${description} exists`);
    score++;
    return true;
  } else {
    error(`${description} is missing`);
    return false;
  }
}

function checkFileContent(filePath, searchTerms, description) {
  totalChecks++;
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const foundTerms = searchTerms.filter(term => content.includes(term));

    if (foundTerms.length === searchTerms.length) {
      success(`${description} - all required terms found`);
      score++;
      return true;
    } else {
      const missingTerms = searchTerms.filter(term => !content.includes(term));
      warning(`${description} - missing terms: ${missingTerms.join(', ')}`);
      return false;
    }
  } else {
    error(`${description} - file not found`);
    return false;
  }
}

console.log(`${colors.bold}📁 File Structure Check${colors.reset}`);
console.log('='.repeat(50));

// Проверка основных файлов
checkFile('public/robots.txt', 'robots.txt');
checkFile('public/sitemap.xml', 'sitemap.xml');
checkFile('public/site.webmanifest', 'site.webmanifest');
checkFile('vercel.json', 'vercel.json');
checkFile('src/utils/seo.js', 'SEO utilities');
checkFile('src/utils/localSEO.js', 'Local SEO utilities');

console.log(`\n${colors.bold}🔍 Content SEO Check${colors.reset}`);
console.log('='.repeat(50));

// Проверка SEO контента
checkFileContent(
  'src/utils/seo.js',
  ['MaxMetall', 'нержавейка', 'Бишкек', 'keywords', 'generateMainPageMeta'],
  'SEO utilities content'
);

checkFileContent(
  'src/app/layout.js',
  ['meta.title', 'meta.description', 'meta.keywords', 'application/ld+json'],
  'Layout SEO meta tags'
);

checkFileContent(
  'public/robots.txt',
  ['User-agent:', 'Allow:', 'Sitemap:', 'https://maxmetall.kg'],
  'robots.txt content'
);

checkFileContent(
  'public/sitemap.xml',
  ['<urlset', '<url>', '<loc>https://maxmetall.kg', '<lastmod>', '<changefreq>'],
  'sitemap.xml structure'
);

console.log(`\n${colors.bold}🏢 Business Information Check${colors.reset}`);
console.log('='.repeat(50));

// Проверка бизнес информации
checkFileContent(
  'src/utils/localSEO.js',
  ['+996555918355', 'ул. Чуйкова 168', 'Бишкек', 'Кыргызстан', 'LocalBusiness'],
  'Business contact information'
);

checkFileContent(
  'src/components/Footer.js',
  ['MaxMetall', '+996555918355', 'нержавеющей стали', 'Бишкек'],
  'Footer business information'
);

console.log(`\n${colors.bold}🎯 Keyword Density Check${colors.reset}`);
console.log('='.repeat(50));

// Проверка плотности ключевых слов
const keywordChecks = [{
    file: 'src/utils/seo.js',
    keywords: ['нержавейка', 'MaxMetall', 'Бишкек', 'перила', 'ограждения']
  },
  {
    file: 'src/components/Footer.js',
    keywords: ['нержавеющей стали', 'изделия', 'производство']
  },
  {
    file: 'src/app/page.js',
    keywords: ['MaxMetall', 'нержавеющей стали', 'Бишкек']
  }
];

keywordChecks.forEach(check => {
  if (fs.existsSync(check.file)) {
    const content = fs.readFileSync(check.file, 'utf8');
    const foundKeywords = check.keywords.filter(keyword => content.includes(keyword));

    totalChecks++;
    if (foundKeywords.length >= check.keywords.length * 0.8) {
      success(`${path.basename(check.file)} - good keyword coverage (${foundKeywords.length}/${check.keywords.length})`);
      score++;
    } else {
      warning(`${path.basename(check.file)} - low keyword coverage (${foundKeywords.length}/${check.keywords.length})`);
    }
  }
});

console.log(`\n${colors.bold}📱 Technical SEO Check${colors.reset}`);
console.log('='.repeat(50));

// Проверка технических аспектов
checkFileContent(
  'src/app/layout.js',
  ['viewport', 'charset', 'og:', 'twitter:', 'canonical'],
  'Essential meta tags'
);

checkFileContent(
  'vercel.json',
  ['headers', 'redirects', 'Cache-Control', 'X-Content-Type-Options'],
  'Vercel SEO configuration'
);

checkFileContent(
  'next.config.mjs',
  ['output', 'trailingSlash', 'images'],
  'Next.js SEO configuration'
);

console.log(`\n${colors.bold}🌟 SEO Score Summary${colors.reset}`);
console.log('='.repeat(50));

const percentage = Math.round((score / totalChecks) * 100);
const getScoreColor = (score) => {
  if (score >= 90) return colors.green;
  if (score >= 75) return colors.yellow;
  return colors.red;
};

console.log(`${getScoreColor(percentage)}${colors.bold}SEO Score: ${score}/${totalChecks} (${percentage}%)${colors.reset}`);

if (percentage >= 90) {
  console.log(`${colors.green}🎉 Excellent! Your SEO is well optimized.${colors.reset}`);
} else if (percentage >= 75) {
  console.log(`${colors.yellow}👍 Good! There are some areas for improvement.${colors.reset}`);
} else {
  console.log(`${colors.red}⚠️  Needs work! Several SEO issues need attention.${colors.reset}`);
}

console.log(`\n${colors.bold}📝 SEO Recommendations${colors.reset}`);
console.log('='.repeat(50));

const recommendations = [
  '1. Ensure all meta tags are properly filled',
  '2. Check that structured data is valid (test with Google Rich Results)',
  '3. Verify that all images have proper alt attributes',
  '4. Test site speed with Google PageSpeed Insights',
  '5. Submit sitemap to Google Search Console',
  '6. Monitor Core Web Vitals regularly',
  '7. Check mobile-friendliness with Google Mobile-Friendly Test',
  '8. Verify that all internal links work correctly',
  '9. Test social media sharing with Facebook Debugger',
  '10. Monitor keyword rankings and adjust content accordingly'
];

recommendations.forEach(rec => {
  info(rec);
});

console.log(`\n${colors.bold}🔗 Useful Tools${colors.reset}`);
console.log('='.repeat(50));

const tools = [
  'Google Search Console: https://search.google.com/search-console',
  'Google PageSpeed Insights: https://pagespeed.web.dev/',
  'Google Rich Results Test: https://search.google.com/test/rich-results',
  'Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/',
  'Twitter Card Validator: https://cards-dev.twitter.com/validator',
  'Structured Data Testing Tool: https://validator.schema.org/',
  'Mobile-Friendly Test: https://search.google.com/test/mobile-friendly',
  'Lighthouse CI: https://github.com/GoogleChrome/lighthouse-ci'
];

tools.forEach(tool => {
  console.log(`${colors.blue}🔧 ${tool}${colors.reset}`);
});

console.log(`\n${colors.green}✨ MaxMetall SEO Check Complete!${colors.reset}\n`);

// Выход с кодом ошибки если score меньше 75%
process.exit(percentage >= 75 ? 0 : 1);