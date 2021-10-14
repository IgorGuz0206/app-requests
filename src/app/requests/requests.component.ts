import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

  items!: Item[]
  item: Item = new Item(null, null)
  itemsUrl = '/items'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const url = this.itemsUrl
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    let params = new HttpParams()

    if (this.item.id) params = params.set('id', `${this.item.id}`)
    
    if (this.item.name) params = params.set('name', `${this.item.name}`)
    

    const options = {headers, params}

    this.http.get<Item[]>(url, options).subscribe(
      res => this.items = res,
      err => console.log(err)
    )
  }

  postData(): void {
    const url = this.itemsUrl
    const data = this.item
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    const options = {headers}

    this.http.post<Item>(url, data, options).subscribe(
    res => this.items.push(res),
    err => console.log(err)
  )
  }

  clearAndGet(): void {
    this.items.length = 0
    this.getData()
  }
}
