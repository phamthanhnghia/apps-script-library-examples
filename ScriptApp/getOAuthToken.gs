/**
 * Retrieve the OAuth token for external API integrations.
 */
function getOAuthToken() {
  const token = ScriptApp.getOAuthToken();
  Logger.log('OAuth Token: ' + token);
}