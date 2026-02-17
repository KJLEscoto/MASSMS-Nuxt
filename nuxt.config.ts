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
        },
        { property: 'og:image', content: 'https://kinwebb.netlify.app/massms_thumbnail.png' },
        { property: 'og:image:width', content: '1200' }, // Optional, the width of the image
        { property: 'og:image:height', content: '630' }, // Optional, the height of the image
        { property: 'og:image:type', content: 'image/png' },
      ],
      link: [
        {
          rel: 'shortcut icon', type: 'x-icon', href: '/robust-robot-icon.svg'
        }
      ]
    }
  },
})
