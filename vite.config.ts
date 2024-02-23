import { fileURLToPath, URL } from 'node:url'

import fs from 'fs'
import path from 'path'
import child_process from 'child_process'
import { env } from 'process'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Press, { matter } from "vite-plugin-press"
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'unplugin-vue-markdown/vite'
import svgLoader from 'vite-svg-loader'
import configureMarkdown from './vite.config.markdown'

const currentDir = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // https://github.com/posva/unplugin-vue-router
        VueRouter({
            extensions: ['.vue', '.md'],
            dts: 'src/typed-router.d.ts',
            extendRoute(route:any) { 
                const filePath = route.node.value.components?.get('default')
                if (filePath && filePath.endsWith('.md')) {
                    const md = fs.readFileSync(filePath, 'utf-8')
                    const { attributes:frontmatter } = matter(md)
                    const pos = filePath.indexOf('/src/pages/')
                    const crumbs =  filePath.substring(pos + '/src/pages/'.length).split('/').slice(0,-1)
                        .map((name:string) => ({ name, href:`/${name}` }))
                    route.meta = Object.assign(route.meta || {}, { crumbs, frontmatter })
                }
            }
        }),
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Press({
            metadataPath: 'public/api',
        }),
        Layouts(),
        svgLoader(),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                '@vueuse/core',
                VueRouterAutoImports,
                {
                    // add any other imports you were relying on
                    'vue-router/auto': ['useLink'],
                },
            ],
            dts: true,
            dirs: [
                './src/composables',
            ],
            vueTemplate: true,
        }),

        // https://github.com/unplugin/unplugin-vue-markdown
        Markdown({
            // default options passed to markdown-it
            // see: https://markdown-it.github.io/markdown-it/
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true,
            },
            wrapperComponent: 'MarkdownPage',
            headEnabled: true,
            markdownItSetup(md:any) {
                configureMarkdown(md)
            },            
        }),

        // https://github.com/antfu/vite-plugin-components
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],

            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

            dts: 'src/components.d.ts',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@unhead/vue': path.join(currentDir, './node_modules/@unhead/vue'),
            '@servicestack/vue': path.join(currentDir, './node_modules/@servicestack/vue'),
        }
    }
})
