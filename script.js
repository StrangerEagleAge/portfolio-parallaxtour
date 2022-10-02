$('.wrapper').on('mousemove', function (e) {
  mouseX = e.pageX, mouseY = e.pageY, moveFactor = 50, windowWidth = $(this).width(), windowHeight = $(this).height();
  percentX = ((mouseX / windowWidth) * moveFactor - moveFactor / 2);
  percentY = ((mouseY / windowHeight) * moveFactor - moveFactor / 2);
  leftString = percentX + "px";
  topString = percentY + "px";
  if (percentX < (windowWidth / 2)) {
    leftString = -percentX + "px";
  }

  if (percentY < (windowHeight / 2)) {
    topString = -percentY + "px";
  }

  bgPos = leftString + " " + topString;
  $(this).find('.bg, .bg2').attr("style", "background-position: " + bgPos);

});