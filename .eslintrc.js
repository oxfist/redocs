module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@docusaurus/recommended",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@docusaurus"],
  rules: {
    "global-require": "off",
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "import/no-unresolved": [
      2,
      { ignore: ["^@theme", "^@docusaurus", "^@site"] },
    ],
  },
};
