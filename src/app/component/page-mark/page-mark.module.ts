export class PageMark {
  /**
   * 构造函数，同时设置属性，初始值
   * @param pageLength 显示的页码数，奇数，默认7
   * @param currentPage 当前页码数，默认1
   * @param totalItems 总条数 默认0
   * @param pageItems 每页显示条数，默认10
   * @param changePage 翻页时调用的方法
   */
  constructor(
    public pageLength:number = 7,
    public currentPage:number = 1,
    public totalItems:number = 60,
    public pageItems:number = 2,
    public changePage:() => void
  ){}

  public static defaultPageMark = new PageMark(7, 1, 60, 2, function () {});
}