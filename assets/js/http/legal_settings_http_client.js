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
 * Legal Settings HTTP client.
 *
 * This module implements the legal settings related HTTP requests.
 */
App.Http.LegalSettings = (function () {
    /**
     * Save legal settings.
     *
     * @param {Object} legalSettings
     *
     * @return {Object}
     */
    function save(legalSettings) {
        const url = App.Utils.Url.siteUrl('legal_settings/save');

        const data = {
            csrf_token: vars('csrf_token'),
            legal_settings: legalSettings,
        };

        return $.post(url, data);
    }

    return {
        save,
    };
})();
