// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: ["~/assets/css/main.css", "~/assets/css/base.css"],
    modules: ["@nuxt/ui"],
    colorMode: {
        classSuffix: "",
    },
});
