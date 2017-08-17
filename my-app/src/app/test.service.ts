import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  hello() {
    alert('hello world');
    console.log('hello world');
  }

}
