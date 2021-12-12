import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from 'src/app/data/athletesData';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-paging',
    styleUrls: ['./paging.component.scss'],
    templateUrl: './paging.component.html'
})

export class PagingComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[] = [];

    public ngOnInit(): void {
        this.data = athletesData;
    }
}
