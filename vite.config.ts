import { defineConfig } from 'vite'
import { existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { config } from "./config.ts";
import { qwikVite } from '@builder.io/qwik/optimizer'

const getBlockEntry = (blockName: string, fileType: string): string | null => {
    const filePath = resolve(__dirname, `src/blocks/${blockName}/${blockName}.${fileType}`);
    return existsSync(filePath) ? filePath : null;
};

const getBlockNamesFromSrcFolder = (): string[] => {
    const blocksPath = resolve(__dirname, 'src/blocks');
    try {
        return readdirSync(blocksPath);
    } catch (error) {
        console.error(`Failed to read directory at ${blocksPath}`, error);
        return [];
    }
};

const getTsEntry = (blockName: string): Record<string, string> | null => {
    const tsPath = getBlockEntry(blockName, 'tsx');
    return tsPath !== null ? { [blockName]: tsPath } : null;
};

export const generateBlockEntries = () => {
    const blockNames = getBlockNamesFromSrcFolder();
    let entries = {};
    blockNames.forEach((blockName) => {
        const tsEntry = getTsEntry(blockName);
        entries = { ...entries, ...tsEntry };
    });
    return entries;
};

export default defineConfig((configEnv) => {
    // const { mainTsPath, mainScssPath, fontsScssPath, lazyStylesScssPath, sidekickLibraryStylesScssPath } = config;
    // const { mainTsPath } = config;
    const blocksEntries = generateBlockEntries();

    // @ts-ignore
    const inputOptions: InputOption = {
        // main: resolve(__dirname, mainTsPath),
        // styles: resolve(__dirname, mainScssPath),
        ...blocksEntries,
    };

    console.log(inputOptions);

    // if (fontsScssPath) inputOptions.fonts = resolve(__dirname, fontsScssPath);
    // if (lazyStylesScssPath) inputOptions.lazyStyles = resolve(__dirname, lazyStylesScssPath);
    // if (sidekickLibraryStylesScssPath) {
    //   inputOptions.sidekickLibraryStyles = resolve(__dirname, sidekickLibraryStylesScssPath);
    // }

    return {
        plugins: [
            qwikVite({
                csr: true,
                client: {
                    outDir: 'resources/', // This is the right setting
                },
            })
        ],
        css: {
            devSourcemap: true,
            preprocessorOptions: {
                // Path to mixins, variables, and other necessary files for transpiling SCSS: '../path/to/styles.scss'
                //  scss: {
                //    additionalData: `@import 'src/styles/<your file path>';`,
                //  },
            },
        },
        resolve: {
            alias: {
                Blocks: resolve(__dirname, 'src/blocks'),
                // Components: resolve(__dirname, 'src/components'),
                // Directives: resolve(__dirname, 'src/directives'),
                // Services: resolve(__dirname, 'src/services'),
                // Helpers: resolve(__dirname, 'src/helpers'),
                // Constants: resolve(__dirname, 'src/constants'),
                // Types: resolve(__dirname, 'src/types'),
                // Utils: resolve(__dirname, 'src/utils'),
            },
        },
        build: {
            sourcemap: true,
            minify: false,
            cssMinify: false,
            commonjsOptions: {
                include: ['node_modules/**'],
            },
            emptyOutDir: true,
            outDir: '../resources/', // This will be overrided to `dist` by qwikVite() setting
            rollupOptions: {
                cache: false,
                preserveEntrySignatures: 'strict',
                input: inputOptions,
                output: {
                    dir: 'blocks',
                    assetFileNames: () => {
                        return '[name]/[name][extname]';
                    },
                    chunkFileNames: '__chunks__/[name].[hash].js',
                    entryFileNames: '[name]/[name].js',
                }
            },
        },
    };
});

