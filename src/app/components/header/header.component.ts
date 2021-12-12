import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'Grid 1', linkUrl: 'paging'},
    {linkId: 2, linkName: 'Grid 2', linkUrl: 'sorting'},
    {linkId: 3, linkName: 'Grid 3', linkUrl: 'filtering'},
    {linkId: 4, linkName: 'Grid 4', linkUrl: 'editing'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
