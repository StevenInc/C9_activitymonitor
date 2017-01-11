System.register(['angular2/core', '../pipes/activityType.pipe', '../pipes/timeAgo.pipe', '../contacts/contacts.service'], function(exports_1, context_1) {
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
    var core_1, activityType_pipe_1, timeAgo_pipe_1, contacts_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (activityType_pipe_1_1) {
                activityType_pipe_1 = activityType_pipe_1_1;
            },
            function (timeAgo_pipe_1_1) {
                timeAgo_pipe_1 = timeAgo_pipe_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactsService) {
                    this._contactsService = _contactsService;
                    this.pageTitle = 'Activity';
                    this.iamgeWidth = 40;
                    this.imageMargin = 2;
                    this.iconRound = 'roundIconGrayBorder';
                }
                ContactListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._contactsService.getContacts().subscribe(function (contacts) { return _this.contacts = contacts; }, function (error) { return _this.errorMessage = error; });
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'el-activity',
                        templateUrl: './contacts/activity-list.component.html',
                        styleUrls: ['./contacts/contacts-list.component.css'],
                        pipes: [activityType_pipe_1.ActivityTypeMapPipe, timeAgo_pipe_1.TimeAgoPipe]
                    }), 
                    __metadata('design:paramtypes', [contacts_service_1.ContactsService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=contact-list.component.js.map
