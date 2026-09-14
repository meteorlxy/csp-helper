import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: {
    tsconfig: './tsconfig.build.json',
  },
  entry: './src/index.ts',
  exports: true,
  fixedExtension: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
});
