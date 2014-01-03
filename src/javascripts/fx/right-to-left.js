//
// MOBILE TRANSITION: RIGHT TO LEFT
// -------------------------
Pine.Navbar.registerTransition('fx-right-to-left', {

  onSwitch: function(condition){
    var $element = this.element
    var $submenu = $element.find('li').has('ul')

    var resizeSubmenu = function (){
      $('.fx-right-to-left ul').css('width', $(window).width())
    }

    if(condition) {
      // Enter mobile view
      $submenu.each(function(){
        $(this).find('ul').first()
          .prepend($('<li class="pine-back"><a href="#">' + $(this).find('a').first().text() + '</a></li>'))
      })

      $(document).on('click', '.pine-back', $.proxy(Pine.Submenu.toggle, this))

      $element.find('ul').css('width', $(window).width())
      $(window).on('resize', resizeSubmenu)

      $.log('ENTER small display view')
    }
    else {
      // Leave mobile view
      $element.find('ul').removeAttr('style')
      $submenu.find('li.pine-back').remove()
      $(window).off('resize', resizeSubmenu)

      $.log('LEAVE small display view')
    }
  },

  onToggle: function(isActive){
    var $this = $(this),
        $parentLists = $this.parents('ul'),
        level = isActive ? $parentLists.length - 2 : $parentLists.length;

    $parentLists.last().css('left', (-100 * level) + '%')
  }
});


