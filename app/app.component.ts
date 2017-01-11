import{Component} from 'angular2/core';
import{ContactListComponent}from './contacts/contact-list.component';
import{ContactsService} from './contacts/contacts.service';
import{HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';  // the script self loads all the methods.

@Component({
    selector : 'contacts-app',
    template : `<div>
                    <h4 class="pageTitle">{{pageTitle}}</h4>
                    <el-activity></el-activity>
                </div>`,
    styleUrls: ['./assets/css/app.css'],
    directives: [ContactListComponent],
    providers: [ContactsService, HTTP_PROVIDERS]
})






export class AppComponent {
    pageTitle: string = 'Contacts Activity:';
}
