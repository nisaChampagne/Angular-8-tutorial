import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { ListComponentComponent } from './list-component/list-component.component'

const routes: Routes = [
  {path: "", component: NewComponentComponent},
  {path: "list", component: ListComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
