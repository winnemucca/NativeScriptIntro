"use strict";
var observable_1 = require('data/observable');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this._tempSessions = new Array();
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._tempSessions;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var sessionArray = [
            {
                id: '1',
                title: "session 1",
                start: "2016-10-03T12:00:00Z",
                end: "2016-10-03T13:00:00Z",
                room: "room1",
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: "session 1 desc",
                descriptionShort: "string",
                calendarEventId: "string",
                isBreak: false
            },
            {
                id: '2',
                title: "session 2",
                start: "2016-10-03T12:00:00Z",
                end: "2016-10-03T13:00:00Z",
                room: "room1",
                roomInfo: {
                    roomId: 'room2',
                    name: 'myroom2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: "session 2 desc",
                descriptionShort: "string",
                calendarEventId: "string",
                isBreak: true
            },
            {
                id: '3',
                title: "session 3",
                start: "2016-10-03T12:00:00Z",
                end: "2016-10-03T13:00:00Z",
                room: "room3",
                roomInfo: {
                    roomId: 'room3',
                    name: 'myroom3',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: "session 3 desc",
                descriptionShort: "string",
                calendarEventId: "string",
                isBreak: false
            }
        ];
        for (var i = 0; i < sessionArray.length; i++) {
            this._tempSessions.push(sessionArray[i]);
        }
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map