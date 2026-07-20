import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/layout.ts',
        'src/menus.ts',
        'src/views.ts',
        'src/primitives.ts',
        'src/brand.ts'
    ],
    format: ['esm'],
    dts: true, // Generates .d.mts declaration files
    splitting: true, // Enables code splitting
    sourcemap: true,
    clean: true, // Cleans dist folder before build
    target: 'es2022',
    external: ['react', 'react-dom'], // Don't bundle these, use the host app's versions
    banner: {
        js: '"use client";', // Ensures all components are treated as Client Components in Next.js
    },
});