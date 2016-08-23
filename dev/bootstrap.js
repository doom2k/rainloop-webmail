
import window from 'window';
import $ from '$';
import {killCtrlACtrlS, detectDropdownVisibility, createCommandLegacy} from 'Common/Utils';
import {$win, $html, data as GlobalsData, bMobileDevice} from 'Common/Globals';
import * as Enums from 'Common/Enums';
import * as Plugins from 'Common/Plugins';
import {i18n} from 'Common/Translator';
import {EmailModel} from 'Model/Email';

export default (App) => {

	GlobalsData.__APP__ = App;

	$win
		.on('keydown', killCtrlACtrlS)
		.on('unload', () => {
			GlobalsData.bUnload = true;
		});

	$html
		.addClass(bMobileDevice ? 'mobile' : 'no-mobile')
		.on('click.dropdown.data-api', () => {
			detectDropdownVisibility();
		});

	const rl = window.rl || {};

	rl.i18n = i18n;
	rl.createCommand = createCommandLegacy;

	rl.addSettingsViewModel = Plugins.addSettingsViewModel;
	rl.addSettingsViewModelForAdmin = Plugins.addSettingsViewModelForAdmin;

	rl.addHook = Plugins.addHook;
	rl.settingsGet = Plugins.mainSettingsGet;
	rl.pluginSettingsGet = Plugins.settingsGet;
	rl.pluginRemoteRequest = Plugins.remoteRequest;

	rl.EmailModel = EmailModel;
	rl.Enums = Enums;

	window.rl = rl;

	window.__APP_BOOT = (fErrorCallback) => {

		$(() => {

			window.setTimeout(() => {

				if (window.rainloopTEMPLATES && window.rainloopTEMPLATES[0])
				{
					$('#rl-templates').html(window.rainloopTEMPLATES[0]);

					window.setTimeout(() => {

						$html
							.removeClass('no-js rl-booted-trigger')
							.addClass('rl-booted');

						App.bootstart();

					}, Enums.Magics.Time10ms);
				}
				else
				{
					fErrorCallback();
				}

				window.__APP_BOOT = null;

			}, Enums.Magics.Time10ms);

		});
	};
};
