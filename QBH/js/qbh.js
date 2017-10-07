var flag = false;
var flag1 = false;
$('#fullpage').fullpage({
  sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#4fd'],
  navigation: true,
  anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
  afterLoad: function (anchorLink, index) {
    if (index == 1) {
      $(".down").fadeIn();
    }
    // console.log(anchorLink,index);
    if (index == 2 && flag == false) {
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
          }, 500, function () {
            flag = true;
          });

          $('.qbh-list-sofas').show().animate({
            "height": 218
          }, 500)

          $('.qbh-list-wordb').animate({
            "opacity": 1
          }, 500, function () {
            $(".down").fadeIn();
          })
        })
      })
    }

    if (index == 8) {
      $(document).mousemove(function (e) {
        // 鼠标位置
        var mx = e.pageX - 40;
        var my = e.pageY - 10;
        // console.log($(".shopping .qbh-shopping-hands"))
        // 赋值给手
        $(".shopping .qbh-shopping-hands").css({
          top: my,
          left: mx
        });
      })
      // 改变按钮
      $(".shopping .qbh-shopping-start-shopping").mouseenter(function () {
        $(".qbh-shopping-dong").show();
      });
    }
  },

  // 
  onLeave: function (index, nextIndex, direction) {
    // 离开页面就隐藏
    $(".down").fadeOut();
    var wHeight = $(window).height();
    // 第二到第三
    if (index == 2 && nextIndex == 3 && flag == true) {
      $('.list .qbh-list-sofa-pic').show().animate({
        "left": 260,
        "bottom": -(wHeight - 250),
        "width": 207
      }, 1000, function () {
        $(".buy .qbh-buy-choose-end").show();
        $(".buy .qbh-buy-add-cart-end").show();
        $(".down").fadeIn();
      });
    }
    // 第三到第四
    if (index == 3 && nextIndex == 4 && flag1 == false) {
      $(".list .qbh-list-sofa-pic").hide();
      $(".buy .qbh-buy-rotate-sofa").show().animate({
        "bottom": -((wHeight - 250)+50),
        "right": 260
      }, 700, function () {
        flag1 = true;
        $(".list .qbh-list-sofa-pic").show();
        $(".buy .qbh-buy-rotate-sofa").hide();
        $(".info .qbh-info-rotate-sofa").show();
        $(".info .qbh-info-cart-box").animate({
          "left":2000
        }, 2000, function () {
          $(".info .qbh-info-address").animate({
            "opacity": 1
          }, 700, function () {
            $(".info .qbh-info-wordb").animate({
              "opacity": 1
            }, 700);
            $(".info .qbh-info-address-font").animate({
              "opacity": 1
            }, 700, function () {
              $(".down").fadeIn();
            });
          });
        });
      });
    }
    // 第四到第五
    if (index == 4) {
      $(".payment .qbh-payment-hands").show().animate({
        "bottom": 0
      }, 1000, function () {

        $(".payment .qbh-payment-mouse-end").animate({
          "opacity": 1
        }, 10, function () {

          $(".payment .qbh-payment-rotate-sofa-start").show().animate({
            "bottom": 170
          }, 1000, function () {

            $(".payment .qbh-payment-rotate-sofa-end").animate({
              "bottom": 70
            }, 700);
            $(".payment .qbh-payment-bill").animate({
              "bottom": 380
            }, 700, function () {
              $(".down").fadeIn();
            });
          });
        });
      });
    }
    // 第六屏
    if (index == 5 && nextIndex == 6) {
      // 箱子接住沙发
      $(".payment .qbh-payment-rotate-sofa-continue").show().animate({
        "bottom": -243,
        "width": 80
      }, 1000);
      $(".delivery .qbh-delivery-box").show().animate({
        "bottom": 400,
        "left": 318
      }, 1000, function () {
        $(".payment .qbh-payment-rotate-sofa-continue").hide();
        $(".delivery .qbh-delivery-box").animate({
          "bottom": 100,
          "left": 485,
          "width": 40
        }, 900, function () {
          // 车跑
          $(".delivery .qbh-delivery-box").hide();
          $(".delivery").animate({
            "backgroundPositionX": '100%'
          }, 2000, function () {
            // 上方标语
            $(".delivery .qbh-delivery-font-end").animate({
              "opacity": 1
            });
            // 送货员
            $(".delivery .qbh-delivery-deliveryman").animate({
              "width": 252,
              "bottom": 115
            }, 600, function () {
            $(".delivery .qbh-delivery-deliveryman").animate({
              "right": 540
            }, 900, function () {
              $(".delivery .qbh-delivery-shouhuo").show();
              $(".delivery .qbh-delivery-door").show();
              $(".delivery .qbh-delivery-buyer").animate({
                "width": 87,
                "right": 400
              }, function () {
                $(".down").fadeIn();
              });
            })
            });
          });
          // 商家标语
          $(".delivery .qbh-delivery-shangjia").animate({
            "opacity": 1
          }, 800, function () {
            // 买家地址
            $(".delivery .qbh-delivery-truck-font").animate({
              "opacity": 1
            }, 1200);
          });
          
        });
      });
    }
    // 第七屏
    if (index == 6 && nextIndex == 7) {
      $(".appraise .qbh-appraise-star").animate({
        "width": 100
      }, 1200, function () {
        $(".appraise .qbh-appraise-haoping").show().animate({
          "left": 400
        }, 50, function () {
          $(".appraise .qbh-appraise-haoping").animate({
            "width": 72
          }, 500, function () {
            $(".down").fadeIn();
          });
        });
      });
    }
    // 第八屏

  }
});