/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, IgxSelectComponent, SortingDirection } from 'igniteui-angular';
import { DATA } from '../../data/localData';

// eslint-disable-next-line no-shadow
enum TYPE {
    SINGLE = 'single',
    MULTI = 'multiple'
}
@Component({
    selector: 'app-sorting',
    styleUrls: ['./sorting.component.scss'],
    templateUrl: './sorting.component.html'
})

export class SortingComponent implements OnInit {
    @ViewChild('grid2', { read: IgxGridComponent, static: true })
    public grid2: IgxGridComponent;

    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;

    public data: any[];
    public sortingTypes = [{ name: 'Multiple Sort', value: TYPE.MULTI }, { name: 'Single Sort', value: TYPE.SINGLE }];
    public currentSortingType: TYPE = TYPE.SINGLE;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
        this.grid2.sortingExpressions = [
            {
                dir: SortingDirection.Asc, fieldName: 'CategoryName',
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public removeSorting($event: any) {
        if (this.currentSortingType === TYPE.SINGLE) {
            this.grid2.columns.forEach((col) => {
                if (!(col.field === $event.fieldName)) {
                    this.grid2.clearSort(col.field);
                }
            });
        }
    }

    public sortTypeSelection(event: any) {
            this.grid2.clearSort();
    }
}
