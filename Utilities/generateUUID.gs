/**
 * @description Generates a universally unique identifier (UUID).
 * A UUID is a 128-bit number used to uniquely identify information in computer systems.
 * It's highly unlikely that the same UUID will be generated twice.
 *
 * Common use cases:
 * - Generating unique IDs for database records.
 * - Creating unique tracking IDs for transactions or events.
 * - Naming files uniquely to avoid collisions.
 *
 * @returns {string} The generated UUID as a string (e.g., "c3e5f8a0-3d9a-4b1a-8c3a-3e5f8a0c3a3e").
 * @see https://developers.google.com/apps-script/reference/utilities#getUuid()
 */
function generateUUID() {
  const uuid = Utilities.getUuid();
  
  Logger.log(`Generated UUID: ${uuid}`);
  
  return uuid;
}

/**
 * @description Example of using the UUID to create a uniquely named document.
 */
function createDocumentWithUUID() {
  const uuid = generateUUID();
  const docName = `Invoice-${uuid}`;
  
  const doc = DocumentApp.create(docName);
  
  Logger.log(`Created document with unique name: ${doc.getName()}`);
  Logger.log(`Document URL: ${doc.getUrl()}`);
}