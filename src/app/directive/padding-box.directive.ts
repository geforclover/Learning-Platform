import { Component, AfterViewInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appPaddingBox]'
})
export class PaddingBoxDirective implements AfterViewInit {
    padding: any;
    constructor() {}

    paddingBox(): void {
        this.padding = document.querySelectorAll('[class*="padding-"]');

        for (let i = 0; i < this.padding.length; i++) {
            const tmp = this.padding[i].getAttribute('class').split(' ');

            for (let j = 0; j < tmp.length; j++) {
                if (tmp[j].indexOf('padding-') > -1) {
                    const paddings = tmp[j].split('-');
                    this.padding[i].style.padding =
                        paddings[1] +
                        ' ' +
                        paddings[2] +
                        ' ' +
                        paddings[3] +
                        ' ' +
                        paddings[4];
                }
            }
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.paddingBox();
        }, 100);
    }
}
