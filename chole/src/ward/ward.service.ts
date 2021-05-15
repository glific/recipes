import { HttpService, Injectable } from '@nestjs/common';
import { take } from 'rxjs/operators';

@Injectable()
export class WardService {
  constructor(private httpService: HttpService) {}

  fetchWard(lat: string, long: string): any {
    return new Promise((resolve) => {
      this.httpService
        .get(
          `https://www.ichangemycity.com/map/get_ward?latitude=${lat}&longitude=${long}`,
        )
        .pipe(
          take(1), //useful if you need the data once and don't want to manually cancel the subscription again
        )
        .subscribe((response: any) => {
          resolve(response);
        });
    });
  }

  async getWardInfo(location) {
    const lat = location.latitude;
    const long = location.longitude;

    const response = await this.fetchWard(lat, long).then((res: any) => {
      return res.data;
    });

    // console.log('response', response);
    return response;
  }
}
