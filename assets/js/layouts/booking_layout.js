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
 * Booking layout.
 *
 * This module implements the booking layout functionality.
 */
window.App.Layouts.Booking = (function () {
    const $selectLanguage = $('#select-language');

    /**
     * Initialize the module.
     */
    function initialize() {
        App.Utils.Lang.enableLanguageSelection($selectLanguage);
    }

    document.addEventListener('DOMContentLoaded', initialize);

    return {};
})();
