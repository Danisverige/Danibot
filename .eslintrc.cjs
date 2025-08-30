// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,   // your chatbot runs in browser
    es2021: true,    // modern JS
    node: true,      // for Node globals like module, require
    jest: true       // for Jest globals like test, expect
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    // Add custom rules here if needed
  }
};

