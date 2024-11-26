// Generate an MD5 hash of a string
function hashString() {
  var inputString = "Apps Script Example";
  var hash = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, inputString);
  var hashHex = hash.map(function(byte) {
    return (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, "0");
  }).join("");
  Logger.log("MD5 Hash: " + hashHex);
}
