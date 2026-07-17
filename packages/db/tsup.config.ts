import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/client.ts',
        'src/index.ts',
    ],
    format: ['esm'],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    target: 'es2022',
});