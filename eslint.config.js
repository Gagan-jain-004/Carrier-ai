import next from "eslint-config-next";

export default [
  ...next(),
  {
    rules: {
      "no-unused-vars": "warn",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];
