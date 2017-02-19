import { Injectable } from '@angular/core';

import { Launch } from './launch';

@Injectable()
export class LaunchService {
  private launches: Launch[] = [
    new Launch('PLN', 'Canada\s Luckiest Baby 6', null, new Date('2017-12-15 00:00:01')),
    new Launch('SLN', 'Accepted', new Date('2017-02-01 00:00:01'), new Date('2017-02-15 00:00:01'))
  ];

  constructor() { }

  getLaunches() {
    return this.launches;
  }

  getLaunch(id: number) {
    return this.launches[id];
  }

  deleteLaunch(launch: Launch) {
    this.launches.splice(this.launches.indexOf(launch), 1);
  }

}
