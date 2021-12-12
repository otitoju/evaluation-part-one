import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditingComponent } from './components/editing/editing.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { PagingComponent } from './components/paging/paging.component';
import { SortingComponent } from './components/sorting/sorting.component';

const routes: Routes = [
  {path: '', component: PagingComponent},
  {path: 'paging', component: PagingComponent},
  {path: 'sorting', component: SortingComponent},
  {path: 'filtering', component: FilteringComponent},
  {path: 'editing', component: EditingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
