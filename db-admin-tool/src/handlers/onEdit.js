import { onEditViewTab } from '../services/viewService'

/**
 * Handle editing cells.
 * Trigger should be installed.
 * @see https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers
 *
 * @param {Event} e Edit trigger event
 * @see https://developers.google.com/apps-script/guides/triggers/events#edit
 */
// eslint-disable-next-line no-unused-vars
function onEditInstall(e) {
  onEditViewTab(e)
}
