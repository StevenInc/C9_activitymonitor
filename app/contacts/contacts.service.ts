import{Injectable} from 'angular2/core';
import{Http, Response} from 'angular2/http';
import{Observable} from 'rxjs/Observable';

@Injectable()
export class ContactsService {
    private _localFile = './assets/data/data.json';
    constructor(private _http: Http) {}
    getContacts(): any {
        return this._http.get(this._localFile)
            .map((response: Response) => response.json().data.recentActivities)
            // Diagnostics: uncomment to view XHR response.
            // .do(data => console.log('XHR ResponseContacts: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error('XHR Error :', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
