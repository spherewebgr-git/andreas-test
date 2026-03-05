<?php
// Register a menu location for your theme
function fundraising_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'fundraising'), // use your theme folder name here
    ));
}
add_action('after_setup_theme', 'fundraising_register_menus');
?>