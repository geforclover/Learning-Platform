import { Component, AfterViewInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appBackColor]'
})
export class BackColorDirective implements AfterViewInit {
    backColor: any;
    constructor() {}

    backgroundColor(): void {
        this.backColor = document.querySelectorAll('[class*="back-"]');

        for (let i = 0; i < this.backColor.length; i++) {
            const tmp = this.backColor[i].getAttribute('class').split(' ');

            for (let j = 0; j < tmp.length; j++) {
                if (tmp[j].indexOf('back-') > -1) {
                    const color = tmp[j].split('-')[1];
                    console.log(color);
                    this.backColor[i].style.backgroundColor = color;
                }
            }
        }

        console.log(this.backColor);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.backgroundColor();
        }, 10);
    }
}
