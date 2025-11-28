<?php defined('BASEPATH') or exit('No direct script access allowed');

/* ----------------------------------------------------------------------------
 * Div4ataZaKermom - Online Appointment Scheduler
 *
 * @package     Div4ataZaKermom
 * @author      V.Hordiienko <admin@driv-ing.art>
 * @copyright   Copyright (c) Div4ata Za Kermom
 * @license     https://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        https://div4ata.driv-ing.art
 * @since       v1.0.0
 * ---------------------------------------------------------------------------- */

/**
 * Logout controller.
 *
 * Handles the logout page functionality.
 *
 * @package Controllers
 */
class Logout extends EA_Controller
{
    /**
     * Render the logout page.
     */
    public function index(): void
    {
        $this->session->sess_destroy();

        $company_name = setting('company_name');

        html_vars([
            'page_title' => lang('log_out'),
            'company_name' => $company_name,
        ]);

        $this->load->view('pages/logout');
    }
}
