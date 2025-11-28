<?php defined('BASEPATH') or exit('No direct script access allowed');

/* ----------------------------------------------------------------------------
 * Div4ataZaKermom - Online Appointment Scheduler
 *
 * @package     Div4ataZaKermom
 * @author      V.Hordiienko <admin@driv-ing.art>
 * @copyright   Copyright (c) Div4ata Za Kermom
 * @license     https://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        https://div4ata.driv-ing.art
 * @since       v1.1.0
 * ---------------------------------------------------------------------------- */

/**
 * Check if Div4ataZaKermom is installed.
 *
 * This function will check some factors to determine if Div4ataZaKermom is installed or not. It is possible that the
 * installation is properly configure without being recognized by this method.
 *
 * Notice: You can add more checks into this file in order to further check the installation state of the application.
 *
 * @return bool Returns whether E!A is installed or not.
 */
function is_app_installed(): bool
{
    $CI = &get_instance();

    return $CI->db->table_exists('users');
}
