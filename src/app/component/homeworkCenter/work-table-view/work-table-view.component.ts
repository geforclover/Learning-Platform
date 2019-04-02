import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output } from '@angular/core';

import { DataInterfaceService } from '../../../service/data-interface.service'
import { TableViewService } from '../../../service/table-view.service'

@Component({
  selector: 'app-work-table-view',
  templateUrl: './work-table-view.component.html'
})
export class WorkTableViewComponent implements OnInit {
    classes: any
    className: string
    homeworkInfos: any
    classHomeworkInfos = []
    currentHomeworks = null
    temp: any
    selectedWorkName: any

		@ViewChild('tableHeading') tableHeading: ElementRef
		@ViewChild('tableViewMain') tableViewMain: ElementRef
		@ViewChild('leftPanel') leftPanel: ElementRef
		@ViewChild('rightPanel') rightPanel: ElementRef

	  constructor(private dataInterfaceService: DataInterfaceService, private tableViewService: TableViewService) { }

	  popLeftPanel = () => {
        this.tableViewService.popTranslateX(this.leftPanel, '-9.5vw', 0.3)
    }

    popRightPanel = () => {
        this.tableViewService.popTranslateX(this.rightPanel, '9.5vw', 0.3)
    }

    getClasses = () => {
        this.dataInterfaceService.getClasses().then(classes => this.classes = classes)
    }

    getCurrentClassName = newName => {
        this.className = newName
        this.homeworkInfos = this.dataInterfaceService.homeworkInfoShared

        for (let i = 0; i < this.homeworkInfos.length; i++) {
            let rangeArr = this.homeworkInfos[i].homeworkRange.split('-')
            for(let j = 0; j < rangeArr.length; j++) {
                rangeArr.indexOf(newName) > -1 ? this.temp = this.homeworkInfos[i] : this.temp = ''
            }
            this.classHomeworkInfos[i] = this.temp
        }
    }

    getCurrentWorkName = (newId, newName) => {
        this.currentHomeworks = newId
        this.selectedWorkName = newName
    }

	  ngOnInit() {
        this.getClasses()
        this.tableViewService.setTableViewMainHeight(this.tableHeading, this.tableViewMain)
	  }

}
