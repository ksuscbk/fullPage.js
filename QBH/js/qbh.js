$('#fullpage').fullpage({
  sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#4fd'],
  navigation: true,
  anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
  afterLoad: function (anchorLink, index) {
    // console.log(anchorLink,index);
    if (index == 2) {
      $('.qbh-list-search').show().animate({
        "right": 370
      }, 500, function () {
        $('.qbh-list-search-font').animate({
          "opacity": 1
        }, 500, function () {
          $('.qbh-list-search').hide();
          $('.qbh-list-search-finish').show().animate({
            "height": 30,
            "right": 250,
            "bottom": 449
          }, 1000);

          $('.qbh-list-sofas').show().animate({
            "height": 218
          }, 1000)

          $('.qbh-list-wordb').animate({
            "opacity": 1
          }, 500)
        })
      })
    }
  },

  // 
  onLeave: function (index, nextIndex, direction) {
    var wHeight = $(window).height();
    if (index == 2 && nextIndex == 3) {
      $('.list .qbh-list-sofa-pic').show().animate({
        "left": 260,
        "bottom": -(wHeight - 250),
        "width": 207
      }, 1200, function () {
        $('.buy .qbh-buy-choose-end').show();
        $('.buy .qbh-buy-add-cart-end').show();
      });
    }
    if (index == 3 && nextIndex == 4) {
      $(".list .qbh-list-sofa-pic").hide();
      $(".buy .qbh-buy-rotate-sofa").show().animate({
        "bottom": -((wHeight - 250)+50),
        "right": 260
      }, 1000, function () {
        $(".buy .qbh-buy-rotate-sofa").hide();
        $(".info .qbh-info-rotate-sofa").show();
        $(".info .qbh-info-cart-box").animate({
          "left":2000
        }, 2000, function () {
          $(".info .qbh-info-address").animate({
            "opacity": 1
          }, 1000, function () {
            $(".info .qbh-info-wordb").animate({
              "opacity": 1
            }, 1000);
            $(".info .qbh-info-address-font").animate({
              "opacity": 1
            }, 1000);
          });
        });
      });
    }
  }
});