import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'timeAgo'
})

export class TimeAgoPipe implements PipeTransform {
    transform(value: string): string {
        let activityDate: any = value;
        let now: number = new Date().getTime();
        let diffMs: number = (now - activityDate); // milliseconds between now & activity date
        let diffDays: number = Math.round(diffMs / 86400000); // days
        let diffHrs: number = Math.round((diffMs % 86400000) / 3600000); // hours
        let diffMins: number = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        let strReturn: string;
        if (diffDays === 1) {
            strReturn = 'a day ago';
        } else if (diffDays > 1) {
            strReturn = diffDays + ' days ago';
        } else if (diffHrs === 1) {
            strReturn = 'an hour ago';
        } else if (diffHrs > 1) {
            strReturn = diffHrs + ' hours ago';
        } else if (diffMins === 1) {
            strReturn = 'a minute ago';
        } else if (diffMins > 1) {
            strReturn = diffMins + ' minutes ago';
        } else {
            strReturn = 'a few seconds ago';
        }
        return strReturn;
    }
}

