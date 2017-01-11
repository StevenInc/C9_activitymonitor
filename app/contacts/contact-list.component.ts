import {Component, OnInit} from 'angular2/core';
import {ActivityTypeMapPipe} from '../pipes/activityType.pipe';
import {TimeAgoPipe} from '../pipes/timeAgo.pipe';
import {ContactsService} from '../contacts/contacts.service';

@Component({
    selector: 'el-activity',
    templateUrl: './contacts/activity-list.component.html',
    styleUrls: ['./contacts/contacts-list.component.css'],
    pipes: [ActivityTypeMapPipe, TimeAgoPipe]
})

export class ContactListComponent implements OnInit {
    pageTitle: string = 'Activity';
    iamgeWidth: number = 40;
    imageMargin: number = 2;
    iconRound: string = 'roundIconGrayBorder';
    contacts: any;
    errorMessage: string;
    constructor(private _contactsService: ContactsService) {
    }
    ngOnInit(): void {
        this._contactsService.getContacts().subscribe(contacts => this.contacts = contacts, error => this.errorMessage = <any>error);
    }

}
