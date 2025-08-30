# Danibot - Your DevOps Sidekick 🤖

![CI](https://github.com/<username>/<repo>/actions/workflows/build-deploy.yml/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/<username>/<repo>/badge.svg)](https://snyk.io/test/github/<username>/<repo>)

**Danibot** is a lightweight, rule-based chatbot designed to assist developers and DevOps engineers. It provides guidance, example commands, and best practices for Linux, SSH, Git/GitHub, and AWS — all from a single HTML/JS file that runs entirely in your browser.

---

## 🚀 Features

- Rule-based responses to Linux commands  
- Guidance for SSH key management  
- Git/GitHub command examples  
- AWS command references  
- Runs entirely in the browser (no installation required)  
- Fully tested with **Jest**  
- Security scanning integrated via **Snyk**  
- Linting enforced with **ESLint** for clean, maintainable code  

---

## 🎯 Usage

1. Open `danibot.html` in your browser or embed it in your website.  
2. Type a command in the input box.  
3. Press **Run** to see the bot’s response.  

**Example commands:**
```text
ls -la
ssh-keygen -t rsa
git status
aws s3 ls

