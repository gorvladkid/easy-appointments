/* ----------------------------------------------------------------------------
 * Div4ataZaKermom - Online Appointment Scheduler
 *
 * @package     Div4ataZaKermom
 * @author      V.Hordiienko <admin@driv-ing.art>
 * @copyright   Copyright (c) Alex Tselegidis
 * @license     https://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        https://driv-ing.art
 * @since       v1.5.0
 * ---------------------------------------------------------------------------- */

/**
 * Booking Settings HTTP client.
 *
 * This module implements the booking settings related HTTP requests.
 */
App.Http.BookingSettings = (function () {
    /**
     * Save booking settings.
     *
     * @param {Object} bookingSettings
     *
     * @return {Object}
     */
    function save(bookingSettings) {
        const url = App.Utils.Url.siteUrl('booking_settings/save');

        const data = {
            csrf_token: vars('csrf_token'),
            booking_settings: bookingSettings,
        };

        return $.post(url, data);
    }

    return {
        save,
    };
})();
