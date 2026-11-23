// import react, { reactCompilerPreset } from '@vitejs/plugin-react';
// import babel from '@rolldown/plugin-babel';
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';
// import flowbiteReact from "flowbite-react/plugin/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] }),
//     tailwindcss(),
//     flowbiteReact()
//   ],
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});