import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx,js,jsx}"], // Added js/jsx support just in case
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // Expanded the array spread if required by your tseslint version
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Allows using 'any' explicitly anywhere without throwing lint errors
      "@typescript-eslint/no-explicit-any": "off",

      // Allows defining variables/parameters without explicit types (implicit any)
      "@typescript-eslint/no-implicit-any": "off",

      // Prevents lint errors if you leave unused variables while testing components
      "@typescript-eslint/no-unused-vars": "warn",

      // Ensures React Refresh plugin won't complain during fast exports
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]);
