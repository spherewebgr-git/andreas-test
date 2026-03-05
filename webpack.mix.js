const mix = require('laravel-mix');
const fs = require("fs");

mix.options({
    clearConsole: true,
    processCssUrls: false,
    autoprefixer: false,
    withFileTypes: true
});

fs.readdirSync("assets/sass/").forEach(fileName => {
    mix.sass(`assets/sass/${fileName}`, "assets/css", {
        sassOptions: {
            silenceDeprecations: ['legacy-js-api']
        }
    });
});

mix.disableNotifications();
