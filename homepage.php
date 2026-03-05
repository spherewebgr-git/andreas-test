<?php
/**
 * Template Name: Home Page
 * @package Andrew Theme
 * @since 1.0
 * @version 2.0
 * home page branch version
 */
?>
<?php get_header()
. get_template_part('parts/homepage/section', 'slider')
. get_template_part('parts/homepage/section', 'breadcrumb')
.get_footer(); ?>