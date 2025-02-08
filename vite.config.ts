import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // Указание на src
        },
    },
    server: {
        host: true,
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    },
    preview: {
        host: true,
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    },
});
