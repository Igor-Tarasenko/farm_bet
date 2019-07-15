$(document).ready(function(){
    $('.user-register').click(function(){
        $('#sidebar').removeClass('active');
    });
    $(".btn-close").click(function () {
        $('#sidebar').addClass('active');
    });
    $(".all-games-js .name-of-species-js p").click(function () {
        $(".all-games-js .name-of-species-js p").removeClass("active");
        $(this).addClass("active");
    });
    $(".some-game-js .name-of-species-js p").click(function () {
        $(".some-game-js .name-of-species-js p").removeClass("active");
        $(this).addClass("active");
    });
    $(".enumeration-of-games .name-of-species-js p").click(function () {
        $(".enumeration-of-games .name-of-species-js p").removeClass("active");
        $(this).addClass("active");
    });
    $(".slogan_and_name-of-species .name-of-species-js p").click(function () {
        $(".slogan_and_name-of-species .name-of-species-js p").removeClass("active");
        $(this).addClass("active");
    });
    $(".btn-percent").click(function () {
        $(".btn-percent").removeClass("active");
        $(this).addClass("active");
    });
    $(".menu-js").click(function () {
        var menu = $(".menu-js");
        menu.removeClass("active");
        var activeClassesForChild = [];
        menu.each(function (e) {
            activeClassesForChild[e] = $(this).text().toLowerCase().split(' ')[0];
            $(this).children().removeClass(activeClassesForChild[e]+'-active');
        });
        $(this).addClass("active");
        var textHtml = $(this).text().toLowerCase();
        var cutText = textHtml.split(' ')[0];
        if ($(this).hasClass('active')) {
            var className = $(this).children().attr('class');
            if (className === cutText) {
                $(this).children().addClass(className+'-active');
            }
        }else {
            return false;
        }
    });
    $(".game-buttons-js").click(function () {
        $(".all-games-js, .league-all-game-js").hide("slow");
        setTimeout(function(){
            $(".some-game-js").show("slow");
        }, 600);
    });
    $(".top-js").click(function () {
        $(".some-game-js, .league-all-game-js").hide("slow");
        setTimeout(function(){
            $(".all-games-js").show("slow");
        }, 600);
    });
    $(".league-js").click(function () {
        $(".some-game-js, .all-games-js").hide("slow");
        setTimeout(function(){
            $(".league-all-game-js").show("slow");
        }, 600);
    });
    $(".stats").click(function () {
        $(".stream-block-js, .tournament-block-js").hide("slow");
        setTimeout(function(){
            $(".form-enumeration-block-js").show("slow");
        }, 600);
    });
    $(".stream").click(function () {
        $(".form-enumeration-block-js, .tournament-block-js").hide("slow");
        setTimeout(function(){
            $(".stream-block-js").show("slow");
        }, 600);
    });
    $(".tournament").click(function () {
        $(".form-enumeration-block-js, .stream-block-js").hide("slow");
        setTimeout(function(){
            $(".tournament-block-js").show("slow");
        }, 600);
    });

    // Переключение между блоками в личном кабинете
    $(".overview-menu-js").click(function () {
        $(".bonuses-js, .bet-js, .withdraw-js, .affiliate-js, .responsible-js, .change-js, .account-js").hide("slow");
        setTimeout(function(){
            $(".overview-js").show("slow");
        }, 600);
    });
    $(".bet-menu-js").click(function () {
        $(".overview-js, .bonuses-js, .withdraw-js, .affiliate-js, .responsible-js, .change-js, .account-js").hide("slow");
        setTimeout(function(){
            $(".bet-js").show("slow");
        }, 600);
    });
    $(".withdraw-menu-js").click(function () {
        $(".overview-js, .bet-js, .bonuses-js, .affiliate-js, .responsible-js, .change-js, .account-js").hide("slow");
        setTimeout(function(){
            $(".withdraw-js").show("slow");
        }, 600);
    });
    $(".bonuses-menu-js").click(function () {
        $(".overview-js, .bet-js, .withdraw-js, .affiliate-js, .responsible-js, .change-js, .account-js").hide("slow");
        setTimeout(function(){
            $(".bonuses-js").show("slow");
        }, 600);
    });
    $(".affiliate-menu-js").click(function () {
        $(".overview-js, .bet-js, .withdraw-js, .bonuses-js, .responsible-js, .change-js, .account-js").hide("slow");
        setTimeout(function(){
            $(".affiliate-js").show("slow");
        }, 600);
    });
    $(".responsible-menu-js").click(function () {
        $(".overview-js, .bet-js, .withdraw-js, .bonuses-js, .affiliate-js, .change-js, .account-js").hide("slow");
        setTimeout(function(){
            $(".responsible-js").show("slow");
        }, 600);
    });
    $(".change-menu-js").click(function () {
        $(".overview-js, .bet-js, .withdraw-js, .bonuses-js, .affiliate-js, .responsible-js, .account-js").hide("slow");
        setTimeout(function(){
            $(".change-js").show("slow");
        }, 600);
    });
    $(".account-menu-js").click(function () {
        $(".overview-js, .bet-js, .withdraw-js, .bonuses-js, .affiliate-js, .responsible-js, .change-js").hide("slow");
        setTimeout(function(){
            $(".account-js").show("slow");
        }, 600);
    });
    $(".change-block-js").click(function () {
        $(".first-deposit-block-js").hide("slow");
        setTimeout(function(){
            $(".second-deposit-block-js").show("slow");
        }, 600);
    });
    $(".some-deposit-js").click(function () {
        $(".second-deposit-block-js").hide("slow");
        setTimeout(function(){
            $(".first-deposit-block-js").show("slow");
        }, 600);
    });
    $(".register-link").click(function () {
        $(".main-entry-form").hide("slow");
        setTimeout(function(){
            $(".main-registration-block").show("slow");
        }, 600);
    });
    $(".next-step-form-btn-js").click(function () {
        $(".next-step-form-btn-js").addClass("to-next-js").removeClass("next-step-form-btn-js");
        $(".first-step").hide("slow");
        setTimeout(function(){
            $(".second-step").show("slow");
        }, 600);
    });
    $(".to-next-js").click(function () {
        $(".second-step").hide("slow");
        setTimeout(function(){
            $(".third-step").show("slow");
        }, 600);
    });


    $(".verify").click(function () {
        $(".keyboard-arrow").toggleClass('open');
        $(".account-header-information-block").slideToggle(600);
    });

    $('.account-btn').prop('disabled', true);
    $('#checkbox').change(function() {
        $('.account-btn').prop('disabled', function(i, val) {
            return !val;
        });
        $('.register-form-btn').prop('disabled', function(i, val) {
            return !val;
        });
    });
    $('input.form-control').change(function() {
        if($('input.form-control').map(function(index, domElement) {
            if ($(domElement).val() !== "")
                return domElement;
        }).length < 2) {
            $(".register-form-btn-js").attr('disabled','disabled');
        } else {
            $(".register-form-btn-js").removeAttr('disabled');
        }
    });
    $('.register-form-btn').prop('disabled', true);


    $('.datepicker-here').click(function () {
        $(".datepicker").show("slow");
    });
    $(document).mouseup(function (e) {
        var div = $(".datepicker");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide("slow");
        }
    });
    $(".bet-header-memory p").click(function () {
        $(".bet-header-memory p").removeClass("active");
        $(this).addClass("active");
    });
    $(".bet-header-days p").click(function () {
        $(".bet-header-days p").removeClass("active");
        $(this).addClass("active");
    });
    $(".withdraw-header-memory p").click(function () {
        $(".withdraw-header-memory p").removeClass("active");
        $(this).addClass("active");
    });
    $(".withdraw-payment-method").click(function () {
        $(".withdraw-payment-method").removeClass("active");
        $(this).addClass("active");
    });
    $(".responsible-header-memory p").click(function () {
        $(".responsible-header-memory p").removeClass("active");
        $(this).addClass("active");
    });
    var twitchHeight = $('.twitch-tv').height();
    $('#carousel').css('height', twitchHeight);



    /*Стилизация списка, чекбокса, скролл бара в личном кабинете*/
    $('#country, #checkbox, #day, #month, #year').styler();
    $(".block-with-all-deposits").mCustomScrollbar();
});
$(window).resize(function(){
    var twitchHeight = $('.twitch-tv').height();
    $('#carousel').css('height', twitchHeight);
});