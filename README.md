# Portfolio CI/CD Pipeline 🚀
This repository contains a **CI/CD pipeline** for deploying a personal portfolio website, integrating **Lighthouse CI for performance & accessibility auditing**, and **Dastardly for security vulnerability scanning**. The setup ensures high-quality and secure web deployments using **GitHub Actions, Jenkins and Vercel**.

---

## 🌟 Features
- **Automated performance, SEO, and accessibility testing** using **Lighthouse CI**.
- **Security vulnerability scanning** with **Dastardly by PortSwigger**.
- **CI/CD pipeline** to deploy the website automatically on Vercel after each successful scan.
- **Artifacts generation** for security reports.

---

## 📂 Lighthouse CI Configuration
The **Lighthouse CI** configuration is defined in `lighthouserc.js`:

```js
module.exports = {
  ci: {
    collect: {
      staticDistDir: './', // Replace with the path to your built files or if using Node.js, adjust package.json
    },
    upload: {
      target: 'temporary-public-storage', // Use public storage or setup server
    },
  },
};
```

---

## 📊 Generated Artifacts
- **Lighthouse CI** will generate **temporary reports** for **accessibility, performance, and SEO** as **HTML reports** for better visualization.
- **Dastardly** will generate an **XML report** that contains detected **security vulnerabilities** in the application.

---

## 📄 GitHub Actions CI/CD Pipeline
The pipeline is defined in [`.github/workflows/ci-cd.yml`](https://github.com/bugnificent/ci-cd_test/blob/main/.github/workflows/ci-cd.yml).  
It consists of **two jobs**:

### 1. Lighthouse CI and Dastardly Scan
- Runs **Lighthouse CI** for performance audits.
- Runs **Dastardly** to generate an **XML report** for security vulnerabilities.
- Uploads the scan reports as **artifacts**.

### 2. Deploy to Vercel *(only if the first job succeeds)*
- Deploys the site to **Vercel**.
- If on `main` branch, deploys **production build**.
- Adds deployment URL as a comment in PR.

---

## 🔋 How to Run Locally
If you want to run Lighthouse CI locally, follow these steps:

```bash
npm install -g @lhci/cli@0.14.x
lhci autorun
```

---

## 🚀 Deployment
The website is automatically deployed to **Vercel** on each push/PR to the **main** branch. The deployment URL will be added as a **comment** in the PR.

---

## 🔑 Required Secrets
Ensure the following **GitHub Secrets** are configured for a successful pipeline:
- **`LHCI_GITHUB_APP_TOKEN`** → Required for Lighthouse CI authentication.
- **`VERCEL_TOKEN`** → Required for Vercel deployment.
- **`VERCEL_ORG_ID` & `VERCEL_PROJECT_ID`** → Identifies the Vercel project.

---

## 🛠️ Technologies Used
- **Jenkins**
- **GitHub Actions**
- **Lighthouse CI**
- **Dastardly (PortSwigger)**
- **Node.js**
- **Vercel (Deployment)**

---

## 📚 License
This project is licensed under the [MIT License](LICENSE).

---
## 📩 Contact
For any issues or questions, feel free to **open an issue** or reach out via **[yusufasik.com](https://yusufasik.com/)**.


