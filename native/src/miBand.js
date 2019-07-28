'use strict';

import EventEmitter from 'EventEmitter';

class MiBand extends EventEmitter {
  static get advertisementService() {
    return 'FEE0';
  }
}

export default MiBand;
