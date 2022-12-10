import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { TestComponent } from './test/test.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectiveComponent } from './directive/directive.component';

const routes: Routes = [
  {path:"Test",component:TestComponent},
  {path:"Toyota",component:ToyotaComponent},
  {path:"ContactUs",component:ContactusComponent},
  {path:"Pipes",component:PipesComponent},
  {path:"Directive",component:DirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
