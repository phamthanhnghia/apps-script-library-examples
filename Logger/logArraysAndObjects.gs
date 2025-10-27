/**
 * @description Demonstrates logging arrays and objects.
 * The Apps Script logger provides an interactive, collapsible view for these data types.
 * @see https://developers.google.com/apps-script/reference/base/logger#log(Object...)
 */
function logArraysAndObjects() {
  const simpleArray = ['apple', 'banana', 'cherry'];
  const complexObject = {
    id: 123,
    name: 'John Doe',
    email: 'john.doe@example.com',
    isActive: true,
    roles: ['admin', 'editor'],
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  };

  // It is not necessary to use JSON.stringify(). 
  // Logger.log() handles objects and arrays directly, providing a better inspection UI.
  Logger.log('Logging a simple array:');
  Logger.log(simpleArray);

  Logger.log('Logging a complex object:');
  Logger.log(complexObject);
  
  Logger.log('You can also log them together:');
  Logger.log(simpleArray, complexObject);
}