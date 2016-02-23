/* transitions for landing page images */

var landingVars = {

  screenSize : '',
  width : 0,
  mobileSize : 600,
  autoPlay : true,
  currentPanel : 1,
  totalPanels : 0,
  timePassed : 0,
  timeToChange : 60,
  duration : 1250,
  inTransition : false,
  panelContent : Array,

};

$(document).ready(function() {
    landingGatherData();
});

function landingGatherData() {
  $('.landing_data .landing_panel').each(function(index) {
    landingVars.totalPanels = index + 1;
    var panel_image_l = $(this).attr('data-image')+'_l.jpg';
    var panel_image_s = $(this).attr('data-image')+'_s.jpg';
    var panel_caption = $(this).html();
    landingVars.panelContent[index] = '<div class="landing_panel" data-image-s="'+panel_image_s+'" style="background-image: url('+panel_image_l+');"><div class="overlay"></div><div class="panel_caption">'+panel_caption+'</div></div>';
  });
  var landingTimer = setInterval(landingAdvance,100);

}


function landingAdvance() {
  var landingWidth = $('.landing').width();
  var currentSize = landingVars.screenSize;

  if( landingWidth > landingVars.mobileSize ){
    var newSize = 'large';
  } else {
    var newSize = 'small';
  }

  landingVars.screenSize = newSize;

  if( currentSize != newSize ){
    if( landingVars.screenSize == 'large' ){
      landingMultiPanel();
    }
  }

  if( landingVars.timePassed == landingVars.timeToChange ) {
    landingVars.timePassed = 0;

    if( landingVars.autoPlay == true ){
      if( landingVars.currentPanel == landingVars.totalPanels ){
        $('.landing_nav div:nth-child(1)').trigger('click');
      } else {
        $('.landing_nav div:nth-child('+(landingVars.currentPanel+1)+')').trigger('click');
      }

    }

  } else {
    landingVars.timePassed += 1;
  }

}

function landingMultiPanel() {
  landingVars.timePassed = 0;
  landingVars.autoPlay = true;
  var newHtml = '<div class="landing_stage_large"><div class="landing_container_1"></div><div class="landing_nav"></div><div class="btn prev"></div><div class="btn next"></div></div>';
  $('.landing').html('').append(newHtml);

  for (var i = 0; i < landingVars.totalPanels; i++) {
    $('.landing_nav').append('<div></div>');
  }

  $('.landing').hover(function(){
    landingVars.autoPlay = false;
  }, function(){
    landingVars.autoPlay = true;
    landingVars.timePassed = Math.floor(landingVars.timeToChange / 2);
  });


  $('.landing_nav div').on('click', function(){
    // show which item is selected in landing image navigation
  if ( !landingVars.inTransition ){

        landingVars.inTransition == true;

        var navClicked = $(this).index();
        landingVars.currentPanel = navClicked + 1;

        $('.landing_nav div').removeClass('selected');
        $(this).addClass('selected');

        $('.landing_stage_large').append('<div class="landing_container_2" style="opacity:0;"></div>');
        $('.landing_container_2').html(landingVars.panelContent[navClicked]).animate({opacity:1}, landingVars.duration, function(){
          $('.landing_container_1').remove();
          $(this).addClass('landing_container_1').removeClass('landing_container_2');
          landingVars.inTransition == false;
      });

    }

  });

  $('.landing_nav div:first').trigger('click');

}
