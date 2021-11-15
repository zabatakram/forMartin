import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  userList: Array<any> = [];
  constructor() {
    this.userList = new Array();
  }

  getTable(): string {
    return JSON.stringify(this.userList);
  }

  sendUser(user: any): string {
    this.userList.push(user);
    return JSON.stringify(this.userList);
  }

  deleteUser(user: any): string {
    var idx = -1;
    this.userList.forEach((usr, index) => {
      if (usr == user) {
        idx = index;
      }
    });
    if (idx != -1) {
      this.userList.splice(idx, 1);
    }
    return JSON.stringify(this.userList);
  }
}
