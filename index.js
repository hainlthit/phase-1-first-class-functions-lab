const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2); 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 
const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
        return fareMultiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, selectionType) => {
    return selectionType(drivers)
}