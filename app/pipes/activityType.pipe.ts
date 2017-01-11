import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'activityTypeMap'
})

export class ActivityTypeMapPipe implements PipeTransform {
    transform(value: string): string {
        let nodeTypes = <any>{};
        nodeTypes.Comment = 'commented on the idea';
        nodeTypes.Idea = 'posted an idea';
        nodeTypes.Reply = 'replied to a comment on an idea';
        return nodeTypes[value];
    }
}
