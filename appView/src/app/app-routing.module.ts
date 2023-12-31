import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoutineComponent } from './pages/routine/routine.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { SubRouteTestPageComponent } from './pages/sub-route-test-page/sub-route-test-page.component';
import { DayRoutineSettingsComponent } from './pages/day-routine-settings/day-routine-settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'routine/:routineID', children : [
    {path : "", component : RoutineComponent},
    {path : "config/:day", component : DayRoutineSettingsComponent}
  ]},
  
  { path: 'test/:testID', children : [
    {path : "", component : TestPageComponent},
    {path : "config", component : SubRouteTestPageComponent},
  ]},

  { path: "**", component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
