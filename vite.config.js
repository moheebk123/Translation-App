import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     "/api/translate": {
  //       target: "https://libretranslate.com",
  //       changeOrigin: true,
  //       secure: true,
  //       rewrite: (path) => path.replace(/^\/api\/translate/, "/translate"),
  //     },
  //   },
  // },
});
