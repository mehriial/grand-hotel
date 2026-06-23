$(window).on('load', () => {
    const splash = $('#splash');
    const onboarding = $('#onboarding');

    setTimeout(() => {
        splash.addClass('hide');

        setTimeout(() => {
            splash.hide();
            onboarding.show();
        }, 500);

    }, 1000);
});