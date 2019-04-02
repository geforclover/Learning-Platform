import { TableViewService } from './../../../service/table-view.service';
import { DataInterfaceService } from './../../../service/data-interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exam-rooms',
    templateUrl: './exam-rooms.component.html'
})
export class ExamRoomsComponent implements OnInit {
    roomsList: object[];

    constructor(
        private dataInterfaceService: DataInterfaceService,
        private tableViewService: TableViewService
    ) {}

    getRoomsList = () => {
        this.dataInterfaceService
            .getRoomsList()
            .then(roomsList => (this.roomsList = roomsList.page));
    }

    ngOnInit() {
        this.getRoomsList();
    }
}
