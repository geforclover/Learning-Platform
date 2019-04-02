import { Component, AfterViewInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appColWidth]'
})
export class ColWidthDirective implements AfterViewInit {
    cols: any;
    constructor() {}

    colWidth(): void {
        this.cols = document.querySelectorAll('[class*="col-"]');

        for (let i = 0; i < this.cols.length; i++) {
            const tmp = this.cols[i].getAttribute('class').split(' ');

            for (let j = 0; j < tmp.length; j++) {
                if (tmp[j].indexOf('col-') > -1) {
                    const count = tmp[j].split('-')[1];
                    this.cols[i].style.width = count + '%';
                }
            }
        }

        console.log(this.cols);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.colWidth();
        }, 10);
    }
}
