/**
 * @description Demonstrates how to compute a cryptographic hash of a string using different algorithms.
 * Hashing is a one-way process used to verify data integrity or for security.
 * @see https://developers.google.com/apps-script/reference/utilities#computedigestalgorithm-value
 */
function demonstrateHashing() {
  const inputString = "Google Apps Script is powerful!";

  // --- Helper function to convert byte array to a hex string ---
  const toHexString = (byteArray) => {
    return byteArray.map((byte) => {
      // Ensure byte is positive and format to a 2-digit hex string
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
  };

  // --- MD5 Hashing (Less Secure - good for checksums) ---
  const md5HashBytes = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, inputString, Utilities.Charset.UTF_8);
  const md5HexString = toHexString(md5HashBytes);
  Logger.log(`Input String: "${inputString}"`);
  Logger.log(`MD5 Hash: ${md5HexString}`);
  Logger.log('---');

  // --- SHA-256 Hashing (More Secure - good for security applications) ---
  const sha256HashBytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, inputString, Utilities.Charset.UTF_8);
  const sha256HexString = toHexString(sha256HashBytes);
  Logger.log(`SHA-256 Hash: ${sha256HexString}`);
  Logger.log('---');
  
  // --- SHA-512 Hashing (Even More Secure) ---
  const sha512HashBytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_512, inputString, Utilities.Charset.UTF_8);
  const sha512HexString = toHexString(sha512HashBytes);
  Logger.log(`SHA-512 Hash: ${sha512HexString}`);
}