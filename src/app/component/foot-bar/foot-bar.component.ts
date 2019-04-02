import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.css'],
  host: {
      class: 'footer-navBar'
  }
})
export class FootBarComponent implements OnInit {
		items = null
		item_width = null
		ORGIN_POI = 0.6
		_left = null
		interval = 0.3
		k = null
		n = 0
		current = null
		active = null
    
    @ViewChild('navBarWrap') navBarWrap: ElementRef
    @ViewChild('_hoverShadow') _hoverShadow: ElementRef

    constructor() { }

    setMenuItemWidth = () => {
        this.items = this.navBarWrap.nativeElement.getElementsByClassName('navBar-item')

        for (let i = 0; i < this.items.length; i += 1) {
            this.items[i].style.left = 0.6 + 46 / 4 * i + 'vw'
        }
    }

    menuItemEnter = (i) => {
    	  this.current = i
        this.k = i
        this._left = this._left + 46 / 4 * (i - this.n)
    		this._hoverShadow.nativeElement.style.left = this._left + this.ORGIN_POI + 'vw'
    		this._hoverShadow.nativeElement.style.transition = 'left ' + this.interval + 's'
    		this.n = i
    }

    menuItemLeave = () => {
    	  this._hoverShadow.nativeElement.style.left = -46 / 4 - 1.5 + 'vw'
    	  this._hoverShadow.nativeElement.style.transition = 'left ' + this.interval + 's'
    	  this.current = null
    }

    menuItemActive = (i) => {
        this.active = i
    }

    ngOnInit() {
        this.setMenuItemWidth()
    }
}
