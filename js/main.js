
var $li = $('li');

$('#search').keyup(function(){
  const input = $(this).val().toLowerCase();

  $li.each(function(){
    const currentLi = $(this);
    const currentA = currentLi.children(':first');

    if(currentA.attr('data-title').toLowerCase().indexOf(input) === -1) {
      currentLi.hide();
    } else {
      currentLi.show();
    }
  });
});
