/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: "src/Button/index.tsx",
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  plugins: [react(), libInjectCss(), dts({ exclude: ["**/*.stories.tsx", "src/test", "**/*.test.tsx"] })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don"t have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      include: ["src"],
      exclude: ["**/*.stories.tsx"],
    },
  },
})
