import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[tableViewClose]'
})
export class TableViewCloseDirective {
    constructor(private el: ElementRef) {}

    @HostListener('click')
    onclick() {
        history.go(-1);
    }
}
