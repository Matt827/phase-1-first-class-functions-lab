const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
} 

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
    const multiply = () => n * n
    return multiply
}

function fareDoubler(n) {
    return n * 2
}

function fareTripler(n) {
    return n * 3
}

function selectDifferentDrivers(array, cb) {
    return cb(array)
}
