if (document.documentElement.clientWidth > 768 ){
  var $target = $('body');
  inView.offset(500);
  inView('.change-bg').on('enter', function(el){
    var url = $(el).attr('data-background-url');
    $target.css('background-image', 'url("' + url + '")');
  });
}