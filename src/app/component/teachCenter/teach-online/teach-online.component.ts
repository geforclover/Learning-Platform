import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

import { TableViewService } from '../../../service/table-view.service'
import { DataInterfaceService } from '../../../service/data-interface.service'

@Component({
  selector: 'app-teach-online',
  templateUrl: './teach-online.component.html'
})
export class TeachOnlineComponent implements OnInit {
		@Input() subjectName: string
		@Input() courseId: string
		@Input() versionName: string
		@Input() termYearName: string
		filterObj = []
		onlines: any[]
		termYears: object[]

	  constructor(private tableViewService: TableViewService, private dataInterfaceService: DataInterfaceService) { }

	  getProgram = () => {
				for (let i = 0; i < this.filterObj.length; i++) {
						if (this.filterObj[i] !== undefined) {
								let tmp = []
								for (let j = 0; j < this.onlines.length; j++) {
										for (let idx in this.onlines[j]) {
												if (this.onlines[j][idx] === this.filterObj[i]) {
														tmp.push(this.onlines[j])
												}
										}
								}
								this.onlines = tmp
								this.filterObj.splice(this.filterObj.indexOf(this.filterObj[i]), 1)
						}
				}
		}

	  ngOnInit() {
				this.dataInterfaceService.getTeachOnline().then(online => {
						this.onlines = online
				})
	  }

	  ngOnChanges () {
	  		this.filterObj = [this.courseId, this.versionName, this.termYearName]
	  		this.getProgram()
	  }
}
