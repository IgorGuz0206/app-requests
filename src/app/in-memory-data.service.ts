import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let items = [
      { id: 11, name: 'Windstorm' },
      { id: 12, name: 'Bombasto' },
      { id: 13, name: 'Magneta' },
      { id: 14, name: 'Tornado' },
      { id: 15, name: 'Dindstorm' },
      { id: 16, name: 'Oombasto' },
      { id: 17, name: 'Lagneta' },
      { id: 18, name: 'Hornado' },
      { id: 19, name: 'Pindstorm' },
      { id: 20, name: 'Combasto' },
      { id: 21, name: 'Zagneta' },
      { id: 22, name: 'Mornado' }
    ];
    return {items};
  }
}


 
