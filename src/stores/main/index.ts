import { computed } from 'mobx';

export default class MainStore {
  @computed get test() {
    return 2;
  }
}
