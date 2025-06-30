import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigAsPlugin } from "@eslint/compat"; // Вспомогательная утилита для старых плагинов
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    // Общие настройки для всех файлов
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Применяем ко всем JS/TS/JSX файлам
    languageOptions: {
      parser: tseslint.parser, // Используем парсер TypeScript
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // Важно: Эти настройки могут быть уже в вашей текущей конфигурации Vite/TS
        project: ["./tsconfig.json"], // Путь к вашему tsconfig.json
        tsconfigRootDir: import.meta.dirname, // Корневая директория для tsconfig
      },
      globals: {
        ...globals.browser, // Добавляем глобальные переменные браузера
        // Если вы используете какие-либо специфичные глобальные переменные (например, из Vite env), добавьте их здесь
      },
    },
    // Правила, которые ESLint должен игнорировать (файлы/директории)
    ignores: ["dist", "node_modules", ".git", ".vite/"],
  },
  pluginJs.configs.recommended, // Базовые рекомендованные правила JS
  ...tseslint.configs.recommended, // Рекомендуемые правила TypeScript
  ...tseslint.configs.stylistic, // Дополнительные правила стиля для TypeScript

  // Настройка React плагина
  {
    files: ["**/*.{jsx,tsx}"], // Применяем правила React только к JSX/TSX файлам
    ...fixupConfigAsPlugin(pluginReactConfig), // Применяем рекомендованные правила React
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
    rules: {
      // Отключаем 'react/react-in-jsx-scope' для React 17+
      "react/react-in-jsx-scope": "off",
      // Правило для React Hooks (часто включается отдельно)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  // --- Настройка Prettier в ESLint (самая важная часть для форматирования) ---
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      prettier: prettier, // Регистрируем плагин Prettier
    },
    extends: [
      configPrettier, // Отключает конфликтующие правила ESLint с Prettier
    ],
    rules: {
      "prettier/prettier": ["error", {
        // Здесь можно настроить правила Prettier
        singleQuote: true, // Использовать одинарные кавычки
        semi: true,        // Ставить точки с запятой
        trailingComma: 'es5', // Запятые в конце объектов/массивов в стиле ES5
        printWidth: 100,   // Максимальная длина строки
        tabWidth: 2,       // Ширина таба
        endOfLine: 'lf',   // Стиль окончания строки
      }],
      // Если у вас уже есть правило @typescript-eslint/no-explicit-any в другом месте,
      // убедитесь, что оно не конфликтует. Если нет, можете добавить его здесь.
      "@typescript-eslint/no-explicit-any": "warn", // Например, сделать его предупреждением
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  // --- Конец настройки Prettier ---

  // Плагин для React Refresh (Vite)
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "react-refresh": null, // Placeholder, так как плагин React Refresh обычно добавляется через Vite
    },
    rules: {
      // Это правило обычно добавляется в vite-plugin-react
      // Если оно у вас есть в vite.config.js, то здесь может быть не нужно.
      // Если нет, и вы хотите предотвратить "только export-компоненты", то раскомментируйте:
      // 'react-refresh/only-export-components': [
      //   'warn',
      //   { allowConstantExport: true },
      // ],
    },
  },
];