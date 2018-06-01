function changeColor(self, drum, c){
  var color = drum ? 'transparent' : c;
  $(self).css('background-color', color);
};
