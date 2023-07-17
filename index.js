// Code your solution here

  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  function findMatching(drivers, name) {
    const lowerCaseName = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseName);
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, targetName) {
    return drivers.filter(driver => driver.name === targetName);
  }
  
 