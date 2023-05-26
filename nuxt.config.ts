/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/plausible'],
  vite: {
    //@ts-ignore
    plugins: [svgLoader()],
  },
  plugins: [
    '~/plugins/account/index.ts',
    '~/plugins/billing/index.ts',
    '~/plugins/identicon/index.ts',
    '~/plugins/registry/index.ts',
  ],
})
