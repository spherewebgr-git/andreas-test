<?php

function inn_theme_scripts()
{
    // Theme stylesheet.
    wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/assets/libraries/bootstrap/css/bootstrap5.min.css', '', ' 5.0.2');
    wp_enqueue_style('slick-css', get_template_directory_uri() . '/assets/libraries/slick.css', '', '1.4.1');
    wp_enqueue_style('select2', get_template_directory_uri() . '/assets/libraries/select2.css', '', '4.0.1');
    wp_enqueue_style('animate', get_template_directory_uri() . '/assets/libraries/animate.css', '', '4.0.1');
    wp_enqueue_style('lightgallery', get_template_directory_uri() . '/assets/libraries/lightgallery.css', '', '2.1.6');
    wp_enqueue_style('fontawesome', get_template_directory_uri() . '/assets/libraries/fontawesome.css', '', '6.0.0');
    wp_enqueue_style('style-css', get_template_directory_uri() . '/assets/css/main.css', '', '2.1.0');

    //Theme Scripts
    wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/js/jquery.min.js', null, null, true);
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/assets/libraries/bootstrap/js/bootstrap5.min.js', 'jquery', '5.0.2', true);
    wp_enqueue_script('slick-js', get_template_directory_uri() . '/assets/js/slick.min.js', 'jquery', '1.4.1', true);
    wp_enqueue_script('select2-js', get_template_directory_uri() . '/assets/libraries/select2/select2.min.js', null, '4.0.1', true);
    wp_enqueue_script('lightgallery-js', get_template_directory_uri() . '/assets/js/lightgallery.js', null, '1.7.2', true);
    wp_enqueue_script('lightgallery-umd', get_template_directory_uri() . '/assets/js/lightgallery.umd.js', null, '1.7.2', true);
    wp_enqueue_script('theme-js', get_template_directory_uri() . '/assets/js/theme.js', null, '1.0.0', true);

    //Registering Scripts (-not enqueuing-)
   // wp_register_script( 'my_loadmore', get_stylesheet_directory_uri() . '/assets/js/myloadmore.js', array('jquery'), false, true );


    if (is_home()) {

        wp_enqueue_style('home-css', get_template_directory_uri() . '/assets/css/home-page.css', '', '1.1.0');
    } elseif (is_page()) {

        global $wp_query;
        $template_name = get_post_meta($wp_query->post->ID, '_wp_page_template', true);
        $template_ex = explode('.', $template_name);
        if ($template_ex[0]) {
            wp_enqueue_style($template_ex[0], get_template_directory_uri() . '/assets/css/' . $template_ex[0] . '.css', '', '2.1.0');
        } else {
            wp_enqueue_style('default-page', get_template_directory_uri() . '/assets/css/default.css', '', '2.1.0');
        }


    } elseif (is_singular()) {

        global $wp_query;
        $template_name = get_post_type($wp_query->post->ID);
        $template_ex = explode('.', $template_name);
        wp_enqueue_style($template_ex[0], get_template_directory_uri() . '/assets/css/single-' . $template_name . '.css', '', '2.1.0');
    } elseif (is_category()) {
        wp_enqueue_style('default-page', get_template_directory_uri() . '/assets/css/category-page.css', '', '2.1.0');
    } elseif (is_404()) {
        wp_enqueue_style('404', get_template_directory_uri() . '/assets/css/404.css', '', '2.1.0');
    }
    elseif (is_tax()){
        $css_file = 'taxonomy-'.get_queried_object()->taxonomy.'.css';
        wp_enqueue_style('default-page', get_template_directory_uri() . '/assets/css/'.$css_file, '', '2.1.0');
    }
    elseif (is_archive()) {

        $css_file = 'archive-'.get_queried_object()->name.'.css';
        wp_enqueue_style('default-page', get_template_directory_uri() . '/assets/css/'.$css_file, '', '2.1.0');
    }
    elseif (is_search()){
        wp_enqueue_style('search-page', get_template_directory_uri() . '/assets/css/search-page.css', '', '2.1.0');
    }
}

add_action('wp_enqueue_scripts', 'inn_theme_scripts');