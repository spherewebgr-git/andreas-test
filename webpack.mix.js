const mix = require('laravel-mix');
const fs = require("fs");

mix.options({
    clearConsole: true,
    processCssUrls: false,
    autoprefixer: false,
    withFileTypes: true
});

fs.readdirSync("assets/scss/").forEach(fileName => {
    mix.sass(`assets/scss/${fileName}`, "assets/css", {
        sassOptions: {
            silenceDeprecations: ['legacy-js-api']
        }
    });
});

mix.disableNotifications();
