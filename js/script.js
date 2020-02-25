$(document).ready(function() {
  //font resize
  $('.large>a').click(function() {
    $('.font_resize').removeClass('font_medium').addClass('font_large');
  });
  $('.medium>a').click(function() {
    $('.font_resize').removeClass('font_large').addClass('font_medium');
  });
  $('.small>a').click(function() {
    $('.font_resize').removeClass('font_large').removeClass('font_medium');
  });

  //#dropMenuR
  $('#dropMenuR .uk-button-dropdown[data-uk-dropdown]:not(:last-child)').on('show.uk.dropdown', function() {
    $("#dropMenuR").addClass("borderRadiusLRT");
  });
  $('#dropMenuR .uk-button-dropdown[data-uk-dropdown]').on('hide.uk.dropdown', function() {
    $("#dropMenuR").removeClass("borderRadiusLRT");
  });

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(".uk-overlay-panel").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

  //
  $('.listTabs .uk-nav>li:not(.uk-active):not(.uk-parent)>a, .listTabs .uk-nav>li:not(.level3) li:not(.uk-active):not(.uk-parent)>a, .listTabs .uk-nav>li.level3 li li:not(.uk-active):not(.uk-parent)>a').click(function() {
    $(window).scrollTop(0);
    // $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  //for tabs without switcher
  // $('.listTabs li:not(.uk-parent)>a').click(function() {
  //   $('.listTabs .uk-nav-sub li').removeClass('uk-active') //for 2 or more levels of tabs
  //   $(this).parent().addClass('uk-active').siblings().removeClass('uk-active');
  // });

});

//load active tab from url - CANNOT placed in $(document).ready
UIkit.on('beforeready.uk.dom', function() {
  var hash = document.location.hash;
  if (hash) {
    UIkit.$(hash).addClass('uk-active');
    // UIkit.$(hash).addClass('uk-active').siblings().removeClass('uk-active').parent().parent("li").addClass('uk-active');
    //for 3 levels of tabs
  }
});