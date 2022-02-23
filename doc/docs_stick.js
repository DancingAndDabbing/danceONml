// Ensure that there is the correct number of tabs and content
// in index.html

// The A section of content
let ST_TITLES = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6'];

let st1 = `(pose) => [
    {
        what: 'line',
    },
];`

let st2 = `(pose) => [
    {
        what: 'line',
        where: {
            x1: 30,
            y1: 30,
            x2: 60,
            y2: 80,
        },
    },
];
`

let st3 = `(pose) => [
    {
        what: 'line',
        where: {
            x1: pose.leftElbow.x,
            y1: pose.leftElbow.y,
            x2: pose.leftWrist.x,
            y2: pose.leftWrist.y,
        },
    },
];`;

let st4 = `(pose) => [
    {
        what: 'line',
        where: {
            x1: pose.leftElbow.x,
            y1: pose.leftElbow.y,
            x2: pose.leftWrist.x,
            y2: pose.leftWrist.y,
        },
        how: {
            strokeWeight: 4,
            stroke: 'lime'
        },
    },
];`;

let st5 = `(pose) => [
    {
        what: 'line',
        when: pose.leftWrist.y < pose.leftElbow.y &&
              abs(pose.leftWrist.x - pose.leftElbow.x) < 30,
        where: {
            x1: pose.leftElbow.x,
            y1: pose.leftElbow.y,
            x2: pose.leftWrist.x,
            y2: pose.leftWrist.y,
        },
        how: {
            strokeWeight: 4,
            stroke: 'lime'
        },
    },
];`;

let st6 = `(pose, poseHistory, tm) => [
    {
        what: 'line',
        when: tm[0].probability > 0.9,
        where: {
            x1: pose.leftElbow.x,
            y1: pose.leftElbow.y,
            x2: pose.leftWrist.x,
            y2: pose.leftWrist.y,
        },
        how: {
            strokeWeight: 4,
            stroke: 'lime'
        },
    },
];`;

// Must be a list of lists of code examples
// Probably in the future this could include text and examples
let ST_CODE = [
    [{code:st1, description: 'just a line. where it goes, nobody knows...'}],
    [{code:st2, description: 'line, but less crazy.'}],
    [{code:st3, description: 'stick figure arm?'}],
    [{code:st4, description: 'neon laser arm thingy.'}],
    [{code:st5, description: 'try turning it on and off!'}],
    [{code:st6, description: 'with teachable machine.'}]
];
