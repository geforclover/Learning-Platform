import {Component, Input, DoCheck} from "@angular/core";

import { PageMark } from "./page-mark.module";

@Component({
	  selector: 'app-page-mark',
	  templateUrl: "./page-mark.component.html"
})

export class PageMarkComponent implements DoCheck{
	  @Input() public pageMark: PageMark
	  public pageNum: number
	  public pageList: any[]
	  private oldTotalItems:number = 0

	  public changeCurrentPage(item:any): void{
		    if(typeof item === 'number'){
			      this.pageMark.currentPage = item;
			      this.pageMark.changePage()
		    }
	  }

	  public prePage(): void {
		    if (this.pageMark.currentPage != 1) {
		      	this.changeCurrentPage(this.pageMark.currentPage - 1)
		    }
	  }

	  public nextPage(): void {
		    if (this.pageMark.currentPage < this.pageNum) {
		      	this.changeCurrentPage(this.pageMark.currentPage + 1)
		    }
	  }

	  public initPageList(): void {
		    //偏移量（因为要除去首页和尾页，所以要-1）
		    let offset = Math.floor(this.pageMark.pageLength / 2) - 1
		    //如果没有数据显示一页
		    this.pageMark.totalItems = this.pageMark.totalItems > 0 ? this.pageMark.totalItems : 1
		    //总页数
		    this.pageNum = Math.ceil(this.pageMark.totalItems / this.pageMark.pageItems)
		    this.pageList = []
		    if (this.pageNum <= this.pageMark.pageLength) {
			      for (let i = 1; i <= this.pageNum; i++) {
			        	this.pageList.push(i)
			      }
		    } else {
			      //左边没有'...'
			      if (this.pageMark.currentPage < this.pageMark.pageLength - offset) {
				        for (let i = 1; i < this.pageMark.pageLength; i++) {
				          	this.pageList.push(i)
				        }
				        this.pageList.push('...')
				        this.pageList.push(this.pageNum)
				    //右边没有'...'
			      } else if (this.pageMark.currentPage >= this.pageNum - offset - 1) {
				        this.pageList.push(1)
				        this.pageList.push('...')
				        for (let i = this.pageMark.pageLength - 2; i >= 0; i--) {
				          	this.pageList.push(this.pageNum - i)
				        }
			      //两边都有'...'
			      } else {
				        this.pageList.push(1)
				        this.pageList.push('...')
				        for (let i = this.pageMark.currentPage - offset; i <= this.pageMark.currentPage + offset; i++) {
				          	this.pageList.push(i)
				        }
				        this.pageList.push('...')
				        this.pageList.push(this.pageNum)
			      }
		    }
	  }

	  ngDoCheck():void {
		    if (this.pageMark.totalItems != this.oldTotalItems) {
			      this.initPageList()
			      this.oldTotalItems = this.pageMark.totalItems
		    }

		    if (this.pageMark.currentPage > this.pageNum) {
			      this.pageMark.currentPage = this.pageNum
			      this.pageMark.changePage()
		    }
	  }
}