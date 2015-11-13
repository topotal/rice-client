import EventDispatcher from 'eventDispatcher';

export default class PageManager extends EventDispatcher{


  constructor() {
    if(PageManager.instance) {
      return PageManager.instance;
    }

    super();

    this._currentPage = '';

    PageManager.instance = this;
    PageManager.CHANGE_PAGE = 'change_page';

    return this;
  }


  goToPage(name) {
    this._currentPage = name;
    this.fireEvent(PageManager.CHANGE_PAGE);
  }

  get currentPage() {
    return this._currentPage;
  }

}
