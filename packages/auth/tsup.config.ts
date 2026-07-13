import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/hooks.ts',
        'src/provider.ts',
        'src/server.ts'
    ],
    format: ['esm'],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    target: 'es2022',
});