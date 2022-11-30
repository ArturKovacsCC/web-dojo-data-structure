
const thisDojo = {
    facilitator: {
        name: "Artur",
        height: 180
    },
    attendees: [
        {
            name: "Peti",
            height: 170
        },
        {
            name: "Gabi",
            height: 165
        },
    ]
};

function getTallestAttendee(dojo) {
    if (dojo.attendees.length == 0) {
        return undefined;
    }
    let tallestAttendee = dojo.attendees[0];
    for (const attendee of dojo.attendees) {
        if (tallestAttendee.height < attendee.height) {
            tallestAttendee = attendee;
        }
    }
    return tallestAttendee.name;
}

console.log(getTallestAttendee(thisDojo));
const anotherDojo = {...thisDojo};
anotherDojo.attendees[0].height = 3;
console.log(getTallestAttendee(thisDojo));
console.log(getTallestAttendee(anotherDojo));
// Pause at this point and think why do we get the result that we get
anotherDojo.attendees = thisDojo.attendees.map(attendee => {
    return {...attendee}
});
anotherDojo.attendees[0].height = 1000;
console.log(getTallestAttendee(thisDojo));
console.log(getTallestAttendee(anotherDojo));
