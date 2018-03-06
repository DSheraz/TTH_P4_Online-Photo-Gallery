//Taking list from HTML
var $li = $('li');

//Taking input from search when keyboard is pressed.
$('#search').keyup(function(){
  //Make input value not case-sensitive.
  const input = $(this).val().toLowerCase();
  //function to loop through the list.
  $li.each(function(){
    // The current list.
    const currentLi = $(this);
    // The current anchor tag.
    const currentA = currentLi.children(':first');
    // if else statement to hide or show the image.
    if(currentA.attr('data-title').toLowerCase().indexOf(input) === -1) {
      currentLi.hide();
    } else {
      currentLi.show();
    }
  });
});
