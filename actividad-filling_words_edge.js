/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"main.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'text_1',
                            symbolName: 'text_1',
                            type: 'rect',
                            rect: ['74', '110', '140', '43', 'auto', 'auto']
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text_2',
                            type: 'rect',
                            rect: ['99', '220', '167', '43', 'auto', 'auto']
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text_3',
                            type: 'rect',
                            rect: ['383', '110', '128', '43', 'auto', 'auto']
                        },
                        {
                            id: 'btn_submit',
                            symbolName: 'btn_submit',
                            type: 'rect',
                            rect: ['393', '294', '106', '43', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '140px', '43px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,0,0,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            type: 'text',
                            rect: ['0px', '0px', '140px', '43px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '167px', '43px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,220,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            rect: ['0px', '0px', '167px', '43px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '167px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '128px', '43px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,132,37,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            rect: ['0px', '0px', '128px', '43px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn_submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '106px', '43px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Ellipse',
                            opacity: '0.56551724137931',
                            type: 'ellipse',
                            fill: ['rgba(160,0,70,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '106px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 350,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "desactivado": 350
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            350,
                            0,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0.56551724137931'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(192,192,192,1)',
                            'rgba(192,192,192,1)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            350,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(192,192,192,1)',
                            'rgba(160,0,70,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("actividad-filling_words_edgeActions.js");
})("EDGE-14164065");
