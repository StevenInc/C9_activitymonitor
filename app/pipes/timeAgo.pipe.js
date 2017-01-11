System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TimeAgoPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TimeAgoPipe = (function () {
                function TimeAgoPipe() {
                }
                TimeAgoPipe.prototype.transform = function (value) {
                    var activityDate = value;
                    var now = new Date().getTime();
                    var diffMs = (now - activityDate); // milliseconds between now & activity date
                    var diffDays = Math.round(diffMs / 86400000); // days
                    var diffHrs = Math.round((diffMs % 86400000) / 3600000); // hours
                    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
                    var strReturn;
                    if (diffDays === 1) {
                        strReturn = 'a day ago';
                    }
                    else if (diffDays > 1) {
                        strReturn = diffDays + ' days ago';
                    }
                    else if (diffHrs === 1) {
                        strReturn = 'an hour ago';
                    }
                    else if (diffHrs > 1) {
                        strReturn = diffHrs + ' hours ago';
                    }
                    else if (diffMins === 1) {
                        strReturn = 'a minute ago';
                    }
                    else if (diffMins > 1) {
                        strReturn = diffMins + ' minutes ago';
                    }
                    else {
                        strReturn = 'a few seconds ago';
                    }
                    return strReturn;
                };
                TimeAgoPipe = __decorate([
                    core_1.Pipe({
                        name: 'timeAgo'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimeAgoPipe);
                return TimeAgoPipe;
            }());
            exports_1("TimeAgoPipe", TimeAgoPipe);
        }
    }
});

//# sourceMappingURL=timeAgo.pipe.js.map
