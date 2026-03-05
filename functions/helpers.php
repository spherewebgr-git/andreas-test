<?php
function trancateString($string, $charLimit = 150)
{
    if (mb_strlen($string) > $charLimit) {
        $short = mb_substr($string, 0, $charLimit, 'UTF-8') . '...';

    } else {
        $short = $string;
    }
    return $short;

}

function var_dump_pre($dumped = 'I NEED AN ARGUMENT')
{
    echo '<pre>';
    var_dump($dumped);
    echo '</pre>';
}
if (!function_exists('fundraising_setup')) :
    function fundraising_setup()
    {
        add_theme_support('post-thumbnails');
    }
endif;

add_action('after_setup_theme', 'fundraising_setup');

//add_filter('https_ssl_verify', '__return_false');