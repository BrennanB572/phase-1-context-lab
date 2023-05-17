/* Your Code Here */
function createEmployeeRecord(data){
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
};

function createEmployeeRecords(employees){
    return employees.map(createEmployeeRecord);
}

function createTimeInEvent(date){
    const timeInEvent = {
        type: "TimeIn",
        hour: Number(date.slice(-4)),
        date: date.slice(0, 10)
    }
    this.timeInEvents.push(timeInEvent);
    return this;
}

function createTimeOutEvent(date){
    const timeOutEvent = {
        type: "TimeOut",
        hour: Number(date.slice(-4)),
        date: date.slice(0, 10)
    }
    this.timeOutEvents.push(timeOutEvent);
    return this;
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(em => em.date === date);
    const timeOut = this.timeOutEvents.find(em => em.date === date);

    const calcHours = (timeOut.hour - timeIn.hour) / 100;
    return calcHours;
}

function wagesEarnedOnDate(date){
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

function findEmployeeByFirstName(arr, firstName){
    return arr.find(e => e.firstName === firstName);
}

function calculatePayroll(aaRecords){
    return aaRecords.reduce((a, b) => allWagesFor.call(b) + a, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}