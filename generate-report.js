// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';
// import nodemailer from 'nodemailer';

// // === CONFIG ===
// const EMAIL_FROM = 'nag.subbarayudu@thinkhat.ai';
// const EMAIL_TO = ['thinkhatnag@gmail.com','nag.subbarayudu@thinkhat.ai',];
// const EMAIL_PASS = 'dkur gipb vswl gqwy';
// const BASE_DIR = '/Users/nagasubarayudu/Desktop/IOS';
// // ,'cherukuri.chidambaram@thinkhat.ai', 'hepsiba.kambhampati@thinkhat.ai','sarat.tumu@thinkhat.ai','bheema.badri@thinkhat.ai'
// // === STEP 1: Generate Allure Report ===
// console.log("🔧 Generating Allure Report...");
// if (!fs.existsSync(path.join(BASE_DIR, 'allure-results'))) {
//   console.error("❌ No allure-results folder found. Please run your tests first.");
//   process.exit(1);
// }
// execSync(`allure generate ${path.join(BASE_DIR, 'allure-results')} --clean -o ${path.join(BASE_DIR, 'allure-report')}`, { stdio: 'inherit' });

// // === STEP 2: Extract Test Summary and Test Cases ===
// const summaryPath = path.join(BASE_DIR, 'allure-report', 'widgets', 'summary.json');
// if (!fs.existsSync(summaryPath)) {
//   console.error('❌ summary.json not found.');
//   process.exit(1);
// }
// const stats = JSON.parse(fs.readFileSync(summaryPath, 'utf-8')).statistic;
// const { total, passed, failed, broken, skipped, unknown } = stats;

// // Get test cases details from history.json
// const historyPath = path.join(BASE_DIR, 'allure-report', 'data', 'test-cases');
// let testCasesHtml = '';
// if (fs.existsSync(historyPath)) {
//   const testCaseFiles = fs.readdirSync(historyPath);
//   testCasesHtml = '<h3>Test Cases Details:</h3><ul>';
  
//   testCaseFiles.forEach(file => {
//     const testData = JSON.parse(fs.readFileSync(path.join(historyPath, file), 'utf-8'));
//     const status = testData.status.toUpperCase();
//     const name = testData.name;
//     const description = testData.description || 'No description available';
    
//     testCasesHtml += `
//       <li>
//         <strong>${name}</strong> (${status})
//         <br>Description: ${description}
//       </li>`;
//   });
//   testCasesHtml += '</ul>';
// }

// //=== STEP 5: Send Email with Summary + Test Cases ===
// console.log("📬 Sending email...");

// async function sendMail() {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: EMAIL_FROM,
//       pass: EMAIL_PASS,
//     },
//   });

//   const htmlBody = `
//     <h2>🧪 Test Report Summary of IOS NOKI E2E check</h2>
//     <p><strong>Results:</strong></p>
//     <ul>
//       <li>✅ Passed: ${passed}</li>
//       <li>❌ Failed: ${failed}</li>
//       <li>⚠️ Broken: ${broken}</li>
//       <li>⏭️ Skipped: ${skipped}</li>
//       <li>❓ Unknown: ${unknown}</li>
//       <li>🔢 Total: ${total}</li>
//     </ul>
//     ${testCasesHtml}
//         <p><strong> 🧪 the sanity check for NOKi IOS </strong></p>

//   `;

//   const mailOptions = {
//     from: EMAIL_FROM,
//     to: EMAIL_TO,
//     subject: '🧪 Test Summary Report',
//     html: htmlBody
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent:', info.response);
//   } catch (err) {
//     console.error('❌ Failed to send email:', err.message);
//   }
// }

// sendMail();
import { execSync } from 'node:child_process';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// === CONFIGURATION ===
const EMAIL_FROM = 'nag.subbarayudu@thinkhat.ai';
const EMAIL_TO = ['thinkhatnag@gmail.com'];
const EMAIL_PASS = 'dkur gipb vswl gqwy';
const BASE_DIR = '/Users/nagasubarayudu/Desktop/FormDAND';
const RESULTS_DIR = path.join(BASE_DIR, 'allure-results');
const ALL_REPORTS_DIR = path.join(BASE_DIR, 'all-allure-reports');

// === STEP 1: Generate Unique Report Folder ===
console.log("🔧 Generating Allure Report...");

if (!fs.existsSync(RESULTS_DIR)) {
  console.error("❌ No allure-results folder found. Please run your tests first.");
  process.exit(1);
}

if (!fs.existsSync(ALL_REPORTS_DIR)) {
  fs.mkdirSync(ALL_REPORTS_DIR);
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportDir = path.join(ALL_REPORTS_DIR, `allure-report-${timestamp}`);

execSync(`allure generate ${RESULTS_DIR} -o ${reportDir}`, { stdio: 'inherit' });

// === STEP 2: Load Summary from New Report ===
const summaryPath = path.join(reportDir, 'widgets', 'summary.json');
if (!fs.existsSync(summaryPath)) {
  console.error('❌ summary.json not found in the generated report.');
  process.exit(1);
}

const stats = JSON.parse(fs.readFileSync(summaryPath, 'utf-8')).statistic;
const { total, passed, failed, broken, skipped, unknown } = stats;

// === STEP 3: Extract Test Case Info ===
const testCasesPath = path.join(reportDir, 'data', 'test-cases');
let testCasesHtml = '<h3>Test Cases Details:</h3><ul>';

if (fs.existsSync(testCasesPath)) {
  const files = fs.readdirSync(testCasesPath);
  files.forEach(file => {
    const data = JSON.parse(fs.readFileSync(path.join(testCasesPath, file), 'utf-8'));
    const status = data.status.toUpperCase();
    const name = data.name;
    const description = data.description || 'No description available';
    testCasesHtml += `
      <li>
        <strong>${name}</strong> (${status})
        <br>Description: ${description}
      </li>`;
  });
}
testCasesHtml += '</ul>';

// === STEP 4: Send Summary Email ===
console.log("📬 Sending email...");
const dateStr = new Date().toLocaleDateString();

async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_FROM,
      pass: EMAIL_PASS,
    },
  });

  const htmlBody = `
    <h2>🧪 Sanity Test Report Summary - FORMD Android (${dateStr})</h2>
    <p><strong>Results:</strong></p>
    <ul>
      <li>✅ Passed: ${passed}</li>
      <li>❌ Failed: ${failed}</li>
      <li>⚠️ Broken: ${broken}</li>
      <li>⏭️ Skipped: ${skipped}</li>
      <li>❓ Unknown: ${unknown}</li>
      <li>🔢 Total: ${total}</li>
    </ul>
    ${testCasesHtml}
    <p><em>📁 Report folder: <code>${reportDir}</code></em></p>
  `;

  const mailOptions = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: `🧪 Sanity Test Summary Report - FORMD Android (${dateStr})`,
    html: htmlBody
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (err) {
    console.error('❌ Failed to send email:', err.message);
  }
}

sendMail();
