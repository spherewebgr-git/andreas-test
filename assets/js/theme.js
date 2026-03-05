$s = jQuery.noConflict();
if($s('#slider').length > 0) {
    $s('#slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}
