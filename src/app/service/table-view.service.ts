import { Injectable, ViewChild, ElementRef } from '@angular/core';

@Injectable()
export class TableViewService {
    modelTitle = { name: '', url: '' };

    constructor() {}

    setTableViewMainHeight = (heading, main) => {
        if (heading !== null) {
            heading.nativeElement !== null
            ? (main.nativeElement.style.height = 'calc(100% - ' + window.getComputedStyle(heading.nativeElement, null).height + ' - 1px)')
            : (main.nativeElement.style.height = '100%');
        } else {
            main.nativeElement.style.height = '100%';
        }
    }
    popTranslateX = (ele, removing, time) => {
        ele.nativeElement.style.willChange = 'transform';
        ele.nativeElement.style.transform = 'translateX(' + removing + ')';
        ele.nativeElement.style.transition = 'transform ' + time + 's';

        setTimeout(
            function() {
                ele.nativeElement.style.willChange = 'auto';
            }.bind(this),
            500
        );
    }
}
