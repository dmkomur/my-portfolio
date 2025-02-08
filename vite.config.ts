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
    server: {
        port: 3000, // Railway использует этот порт по умолчанию
        host: true, // Позволяет принимать запросы извне
    },
    build: {
        outDir: "dist", // Папка для сборки
    },
    preview: {
        port: 3000,
        host: true,
    },
});
