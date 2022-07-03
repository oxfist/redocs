module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "global-require": "off",
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-unresolved": [
      2,
      { ignore: ["^@theme", "^@docusaurus", "^@site"] },
    ],
  },
};
