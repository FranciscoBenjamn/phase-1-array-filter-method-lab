// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()));
}
function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()));
}
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase().includes(name.toLowerCase()));
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => {
  

    if (driver.charAt(2) === name && driver.charAt(driver.length - 1) === name){
        return;
    }

    return  (driver.substring(0,2) === name.substring(0,2))
    })

}