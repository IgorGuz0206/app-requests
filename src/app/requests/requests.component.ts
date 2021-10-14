import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

  items!: Item[]
  item: Item = new Item(29, 'UserName')
  itemsUrl = '/items'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get<Item[]>(this.itemsUrl).subscribe(
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
