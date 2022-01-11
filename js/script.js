 $('.sl').slick({
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: true,
     cssEase:'ease-in'
 });

// _________________________________________________

  $('.playkey1_slider0').slick({
//autoplay: true,
 slidesToShow: 1,
  slidesToScroll: 1,
     autoplaySpeed: 10000,
     arrows: false,
     cssEase:'ease-in',
     asNavFor: '.playkey1_slider'
      
//      при нажатии на  нижнию картинку она появляется вверху
      
 });

$('.playkey1_slider').slick({
slidesToShow: 3,
//    под слайдером 3 картинки
     autoplaySpeed: 2000,
     arrows: false,
     cssEase:'ease-in',
     asNavFor: '.playkey1_slider0',
    focusOnSelect: true,
//    centerMode: true,
//     centerPadding: '20px',
    
 });

// __________________________________________________________


//3 slader
 $('.slider_reviews').slick({
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: true,
     cssEase:'ease-in'
 });


 // __________________________________________________________


 var modal = document.getElementById('modal_window');

var btn = document.getElementById("button_click");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}