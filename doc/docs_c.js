// The C section of content
let CTITLES = ['text', 'tracking', 'added Fonts', 'built-in fonts'];

let c1a = `{ what: 'text' },`;
let c1b =
`{
        what: 'text',
        when: true,
        where: {
            x: 30,
            y: 30
        },
        how: {
            str: 'Hello world!', // str means string - a term for text

            textSize: 24,

            // [(LEFT | CENTER | RIGHT), (TOP | BOTTOM | CENTER | BASELINE)]
            textAlign: [CENTER, BOTTOM],
            textFont: 'Georgia', // e.g. 'Georgia' or 'Helvetica',
            textStyle: NORMAL,  // NORMAL | ITALIC | BOLD or BOLDITALIC

            fill: color(0, 0, 0, 255),
            stroke: 0,
            strokeWeight: 1,
        }
    },`;

let c2 = `{
        what: 'text',
        how: { str: pose.leftWrist.x },
    },`;

let c3 = `'Angkor',
'ArchitectsDaughter',
'BebasNeue',
'Cinzel',
'CormorantUpright',
'EBGaramond',
'GideonRoman',
'KaushanScript',
'Lobster',
'LuckiestGuy',
'Merriweather',
'Notable',
'Orbitron',
'PatrickHand',
'PermanentMarker',
'Quicksand',
'RalewayDots',
'Vibur',
`
let c4 = `'Arial',
'Brush Script MT',
'Courier New',
'Garamond',
'Georgia',
'Helvetica',
'Tahoma',
'Times New Roman',
'Trebuchet MS',
'Verdana',
`;

// Must be a list of lists of code examples
// Probably in the future this could include text and examples
let CCODE = [
    [{code:c1a, description: 'minimal'}, {code: c1b, description:'expanded'}],
    [{code:c2, description: 'using text is a great way to track specific coordinates'}],
    [{code:c3, description: 'use a font name with the textFont property.'}],
    [{code:c4, description: 'use a font name with the textFont property.'}],
];
