// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'MASSMS',
      meta: [
        {
          name: 'description', content: 'Massms is a fully-featured SMS & mobile marketing platform that doesn\'t stop you from scaling.'
        }
      ],
      link: [
        {
          rel: 'shortcut icon', type: 'x-icon', href: '/robust-robot-icon.svg'
        }
      ]
    }
  },
})
