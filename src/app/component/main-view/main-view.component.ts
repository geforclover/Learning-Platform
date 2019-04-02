import { Component, OnInit, Input } from '@angular/core';

import { MainModel } from './main-view.model';
import { TableViewService } from '../../service/table-view.service';

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    host: {
        class: 'mainView'
    }
})
export class MainViewComponent implements OnInit {
    @Input() mainModel: MainModel[];

    constructor(private tableViewService: TableViewService) {}

    setModelDetail = (newName, newUrl) => {
        this.tableViewService.modelTitle.name = newName;
        this.tableViewService.modelTitle.url = newUrl;
    }

    ngOnInit() {}
}
