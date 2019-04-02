import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service'
import { DataInterfaceService } from '../../../service/data-interface.service'

@Component({
  selector: 'app-teach-table-view',
  templateUrl: './teach-table-view.component.html'
})
export class TeachTableViewComponent implements OnInit {
		subjects: object[]
		subjectName: string
		subjectId: string
		versions: object[]
		versionName: string
		online: object[]
		termYears: object[]
		termYearName: string

  	constructor(private tableViewService: TableViewService, private dataInterfaceService: DataInterfaceService) {}

 		@ViewChild('tableHeading') tableHeading: ElementRef
		@ViewChild('tableViewMain') tableViewMain: ElementRef
		@ViewChild('leftPanel') leftPanel: ElementRef
		@ViewChild('rightPanel') rightPanel: ElementRef

		getSubjects(): void{
				this.dataInterfaceService.getSubjects().then(subjects => this.subjects = subjects)
		}

		getCurrentSubjectName = (newName, newId) => {
				this.subjectName = newName
				this.subjectId = newId
		}

		getVersions(): void {
				this.dataInterfaceService.getVersions().then(versions => this.versions = versions)
		}

		getCurrentVersionName = newVersion => {
				this.versionName = newVersion
		}

		getTermYears = () => {
				this.dataInterfaceService.getTermYears().then(termYears => this.termYears = termYears)
		}

		@Output() getCurrentTermYear = termYear => {
				this.termYearName = termYear
		}

		getTeachOnline = () => {
				this.dataInterfaceService.getTeachOnline().then(online => {
						this.online = online
						let tmp = []
						for (let i = 0; i < this.online.length; i++) {
								for (let j = 0; j < this.termYears.length; j++) {
										if (this.online[i]['years'] === this.termYears[j]['key']) {
												tmp.push(this.termYears[j])
										}
								}
						}
						this.termYears = Array.from(new Set(tmp))
						console.log(this.termYears)
				})
		}

	  popLeftPanel = () => {
        this.tableViewService.popTranslateX(this.leftPanel, '-9.5vw', 0.3)
    }

    popRightPanel = () => {
        this.tableViewService.popTranslateX(this.rightPanel, '13.5vw', 0.3)
    }

    resetFilters = () => {
    		this.subjectName = undefined
    		this.versionName = undefined
    }

    resetSingleFilter = filter => {
    		this.subjectName === filter ? this.subjectName = undefined : ''
    		this.versionName === filter ? this.versionName = undefined : ''
    }

	  ngOnInit() {
	  		this.tableViewService.setTableViewMainHeight(this.tableHeading, this.tableViewMain)
	  		this.getSubjects()
	  		this.getVersions()
	  		this.getTermYears()
	  		this.getTeachOnline()
	  }
}
