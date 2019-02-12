var shuffleSequence = seq("intro", "instructions", "question1", sepWith("sep", rshuffle(startsWith("question"))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next question."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: false,
        saveReactionTime: false
    },
];

var items = [

    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    ["instructions", "Form", {
        html: {include: "instructions.html" },
        }
    ],
                
    ["question1", "FormBIS", {
        html: { include: "Page1.html" },
    } ],
    
    ["question2", "FormBIS", {
        html: { include: "Page2.html" },
    } ],
    
    ["question3", "FormBIS", {
        html: { include: "Page3.html" },
    } ],
    
    ["question4", "FormBIS", {
        html: { include: "Page4.html" },
    } ],
    
    ["question5", "FormBIS", {
        html: { include: "Page5.html" },
    } ],
    
    ["question6", "FormBIS", {
        html: { include: "Page6.html" },
    } ],
    
    ["question7", "FormBIS", {
        html: { include: "Page7.html" },
    } ],

    ["question8", "FormBIS", {
        html: { include: "Page8.html" },
    } ]
             
];
