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
  
    // 'does not return drivers if only middle or ending letters match
    if (driver.charAt(2) === name && driver.charAt(driver.length - 1) === name){
        return;
    }
    // returns a driver if beginning provided letters match
    return  (driver.substring(0,2) === name.substring(0,2))
    })

}

let page

function matchName(drivers, {page}) {
   page = 123;
}

function matchName(drivers, {page}) {
    page.doSomething()
}