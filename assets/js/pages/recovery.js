/* ----------------------------------------------------------------------------
 * Div4ataZaKermom - Online Appointment Scheduler
 *
 * @package     Div4ataZaKermom
 * @author      V.Hordiienko <admin@driv-ing.art>
 * @copyright   Copyright (c) Div4ata Za Kermom
 * @license     https://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        https://div4ata.driv-ing.art
 * @since       v1.5.0
 * ---------------------------------------------------------------------------- */

/**
 * Recovery page.
 *
 * This module implements the functionality of the recovery page.
 */
App.Pages.Recovery = (function () {
    const $form = $('form');
    const $username = $('#username');
    const $email = $('#email');
    const $getNewPassword = $('#get-new-password');

    /**
     * Event: Login Button "Click"
     *
     * Make an HTTP request to the server and check whether the user's credentials are right. If yes then redirect the
     * user to the destination page, otherwise display an error message.
     */
    function onFormSubmit(event) {
        event.preventDefault();

        const $alert = $('.alert');

        $alert.addClass('d-none');

        $getNewPassword.prop('disabled', true);

        const username = $username.val();
        const email = $email.val();

        App.Http.Recovery.perform(username, email)
            .done((response) => {
                $alert.removeClass('d-none alert-danger alert-success');

                if (response.success) {
                    $alert.addClass('alert-success');
                    $alert.text(lang('new_password_sent_with_email'));
                } else {
                    $alert.addClass('alert-danger');
                    $alert.text(
                        'The operation failed! Please enter a valid username ' +
                            'and email address in order to get a new password.',
                    );
                }
            })
            .always(() => {
                $getNewPassword.prop('disabled', false);
            });
    }

    $form.on('submit', onFormSubmit);

    return {};
})();
