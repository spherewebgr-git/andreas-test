<?php

//menu register

function register_menus() {
    register_nav_menus(
        array(
            'main-menu'           => esc_html__( 'Main Menu' ),
            'mobile-menu'         => esc_html__( 'Mobile Menu' ),
        )
    );
}
add_action( 'init', 'register_menus' );