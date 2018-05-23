export class App {
  constructor() {
    document.addEventListener('DOMContentLoaded', this.init.bind(this));
  }

  init() {
    require('scripts/polyfill-nodelist');
  }
}
