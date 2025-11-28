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
 * Google Analytics Settings HTTP client.
 *
 * This module implements the Google Analytics settings related HTTP requests.
 */
App.Http.GoogleAnalyticsSettings = (function () {
    /**
     * Save Google Analytics settings.
     *
     * @param {Object} googleAnalyticsSettings
     *
     * @return {Object}
     */
    function save(googleAnalyticsSettings) {
        const url = App.Utils.Url.siteUrl('google_analytics_settings/save');

        const data = {
            csrf_token: vars('csrf_token'),
            google_analytics_settings: googleAnalyticsSettings,
        };

        return $.post(url, data);
    }

    return {
        save,
    };
})();
