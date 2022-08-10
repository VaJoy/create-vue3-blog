import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteImagemin from 'vite-plugin-imagemin'
import mdPlugin from 'vite-plugin-markdown-to-component'

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const plugins = [
    vue(),
    mdPlugin.plugin({}),
    splitVendorChunkPlugin(),
    viteImagemin(),
];

export default defineConfig(({ mode }) => {
    return {
        resolve: {
            alias: [{
                find: '@',
                replacement: dirname
            }, {
                find: '@src',
                replacement: path.resolve(dirname, 'src')
            },
            {
                find: '@assets',
                replacement: path.resolve(dirname, 'src/assets')
            },
            {
                find: '@pages',
                replacement: path.resolve(dirname, 'src/pages')
            },
            {
                find: '@components',
                replacement: path.resolve(dirname, 'src/components')
            },
            {
                find: '@stores',
                replacement: path.resolve(dirname, 'src/stores')
            }
            ]
        },
        plugins,
        build: {
            emptyOutDir: false,
            rollupOptions: {
                input: {
                    index: 'index.html'
                }
            },
        },
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@src/scss/variables.scss"'
                }
            }
        }
    }
})
