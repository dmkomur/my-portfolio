import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; // Используем Node.js модуль path

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // Установка алиаса для src
        },
    },
});
