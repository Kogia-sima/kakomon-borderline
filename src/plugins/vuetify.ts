import { createVuetify, type ThemeDefinition } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#7857A0',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        // 他の設定をここに記述していく
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
            }
        }
    })

    // Vue.js で Vuetify を使用する
    app.vueApp.use(vuetify)
})