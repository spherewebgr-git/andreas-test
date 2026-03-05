<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
    <div class="site-branding">
        <h1 class="site-title"><?php bloginfo('name'); ?></h1>
        <p class="site-description"><?php bloginfo('description'); ?></p>
    </div>

    <nav class="main-navigation">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary', // matches functions.php
            'container' => false,           // remove extra <div>
            'menu_class' => 'main-menu',    // class for <ul>
            'fallback_cb' => false          // optional: no menu fallback
        ));
        ?>
    </nav>
</header>