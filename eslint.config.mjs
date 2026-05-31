import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Bewuste Nederlandse apostrofs/aanhalingstekens in JSX-tekst (bv. "je's");
      // deze renderen correct en hoeven niet geescaped te worden.
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
