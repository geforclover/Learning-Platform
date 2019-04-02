import { Component, AfterViewInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appMarginBox]'
})
export class MarginBoxDirective implements AfterViewInit{
    margin: any;
    constructor() {}

    marginBox(): void {
        this.margin = document.querySelectorAll('[class*="margin-"]');

        for (let i = 0; i < this.margin.length; i++) {
            const tmp = this.margin[i].getAttribute('class').split(' ');

            for (let j = 0; j < tmp.length; j++) {
                if (tmp[j].indexOf('margin-') > -1) {
                    const margins = tmp[j].split('-');
                    console.log(margins);
                    this.margin[i].style.margin =
                        margins[1] +
                        ' ' +
                        margins[2] +
                        ' ' +
                        margins[3] +
                        ' ' +
                        margins[4];
                }
            }
        }

        console.log(this.margin);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.marginBox();
        }, 10);
    }
}
