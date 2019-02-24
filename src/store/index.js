import MemoriiStore from './MemoriiStore';

class RootStore {
  constructor() {
    this.memoriiStore = new MemoriiStore();
  }
}

const rootStore = (window.store = new RootStore());

export default rootStore;
