import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/index.ts',
    ],
    format: ['esm'],
    dts: true, // Generates .d.mts declaration files
    splitting: true, // Enables code splitting
    sourcemap: true,
    clean: true, // Cleans dist folder before build
    target: 'es2022',
    external: ['react', 'react-dom', 'next'], // Don't bundle these, use the host app's versions
});