import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    host: {
        class: 'top-navBar'
    }
})
export class TopBarComponent implements OnInit {
	  current = null

    constructor() { }

    topBarItemEnter = (i) => {
        this.current = i
    }

	  ngOnInit() {
	  }
}
