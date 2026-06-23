if ($('#slides').length) {
    let current = 0;

    $('#boarding_btn_1').on('click', () => {
        current = 1;
        $('#slides').css('transform', `translateX(-${current * 100}vw)`);
    });

    $('#boarding_btn_2').on('click', () => {
        current = 2;
        $('#slides').css('transform', `translateX(-${current * 100}vw)`);
    });

    $('#boarding_btn_3').on('click', () => {
        window.location.href = 'signin.html';
    });
}


$('.password__box').each(function () {
    const input = $(this).find('input');
    const eye = $(this).find('.eye-icon');
    const eyeSlash = $(this).find('.eye-slash-icon');

    if (!input.length || !eye.length || !eyeSlash.length) return;

    eye.on('click', () => {
        input.attr('type', 'text');
        eye.hide();
        eyeSlash.show();
    });

    eyeSlash.on('click', () => {
        input.attr('type', 'password');
        eye.show();
        eyeSlash.hide();
    });
});

if ($('#signup__btn').length) {
    $('#signup__btn').on('click', () => {
        window.location.href = "otp.html";
    })
}


if ($('#signin__btn').length) {
    $('#signin__btn').on('click', () => {
        window.location.href = "home.html";
    })
}

if ($('.otp__input').length) {
    $('.otp__input').on('click', function () {
        this.addClass('otp-active')
    })
}

if ($('#otp__c__btn').length) {
    $('#otp__c__btn').on('click', function () {
        $('#otp__modal').addClass('show')
    })
}

if ($('.disagree__btn').length) {
    $('.disagree__btn').on('click', function () {
        $('#otp__modal').removeClass('show')
    })
}

if ($('.agree__btn').length) {
    $('.agree__btn').on('click', function () {
       window.location.href = 'home.html'
    })
}