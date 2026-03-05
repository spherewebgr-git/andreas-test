$s = jQuery.noConflict()
let targets = $s(`.infrastructures-megamenu > div > .wp-megamenu-sub-menu > li:not(:first-child)`)
let controllers = $s(".infrastructures-cat-controller");
$s(".infrastructures-megamenu > div > ul > li:first-child > ul > li:last-child").remove()
$s(".infrastructures-megamenu > div > ul > li:first-child > ul > li").css("width", "20%")

$s(".infrastructures-cat-controller").each(function (index) {
    // let target = $s(`.infrastructures-megamenu > div > .wp-megamenu-sub-menu > li:nth-child(${index+2})`)
    $s(this).hover(
        function () {
            $s(controllers).removeClass('active')
            $s(this).addClass('active');
            $s(targets).hide()
            $s(targets[index]).show()
        }
    )
});

$s(window).scroll(function() {
    if($s('#slider').length > 0 && isOverlapping('#socialMedia', '#slider')) {
        $s('#socialMedia').removeClass('active');
    } else if ($s('#homeProjects').length > 0 && isOverlapping('#socialMedia', '#homeProjects')) {
        $s('#socialMedia').removeClass('active');
    } else if ($s('#education').length > 0 && isOverlapping('#socialMedia', '#education')) {
        $s('#socialMedia').removeClass('active');
    } else if ($s('#homeForm').length > 0 && isOverlapping('#socialMedia', '#homeForm')) {
        $s('#socialMedia').removeClass('active');
    } else if ($s('#mainPageContent').length > 0 && isOverlapping('#socialMedia', '#mainPageContent')) {
            $s('#socialMedia').addClass('active');
    } else {
        $s('#socialMedia').addClass('active');
    }
});

function addBlankToExternalLinks() {
    let myDomain = $s('meta[name="domain"]').attr('content');
    $s('a').each(function () {
        let thisUrl = $s(this).attr('href');
        if (!thisUrl) return;
        let isExternal = !thisUrl.startsWith(myDomain) && thisUrl.startsWith('http') ? true : false;
        if (isExternal) {
            $s(this).attr('target', '_blank');
        }
    });
}
addBlankToExternalLinks()

$s(document).ready(function(){
   if($s('.slider-container').length > 0) {
       $s('.slider-container').slick({
           dots: true,
           arrows: false,
       });
   }
   if($s('select.s2').length > 0) {
       $s('select.s2').each(function(){
           $s(this).select2({
               minimumResultsForSearch: -1
           });
       });
   }
   if($s('form').length > 0) {
       $s('.form-field label').each(function(){
          let labelWidth = $s(this).innerWidth() + 10;
          let labelFor = $s(this).attr('for');
          $s('input#'+labelFor).css({'margin-left' : labelWidth, 'width' : 'calc(100% - '+labelWidth+'px'+')'});
          $s('textarea#'+labelFor).css({'margin-left' : labelWidth, 'width' : 'calc(100% - '+labelWidth+'px'+')'});

       });
   }
   $s('a.open-modal').on('click', function (e) {
       e.preventDefault();
       let imgUrl = $s(this).attr('href');
       $s('footer').append('<div class="modal active"><div class="modal-closer"><i class="fa fa-times"></i></div><div class="modal--inner"><img src="'+imgUrl+'" /></div></div>');
       $s('body').addClass('modal-open');
   })
});

$s(document).on('click', '.modal-closer', function() {
    $s('.modal.active').remove();
    $s('body').removeClass('modal-open');
})

if($s('.modal.active').length > 0) {
    $s(window).click(function() {
        $s('.modal.active').remove();
        $s('body').removeClass('modal-open');
    });
}

function isOverlapping(div1, div2) {
    var x1 = $s(div1).offset().left;
    var y1 = $s(div1).offset().top;
    var h1 = $s(div1).outerHeight(true);
    var w1 = $s(div1).outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;

    var x2 = $s(div2).offset().left;
    var y2 = $s(div2).offset().top;
    var h2 = $s(div2).outerHeight(true);
    var w2 = $s(div2).outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
}