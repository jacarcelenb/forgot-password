import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailPasswordComponent } from './components/send-email-password/send-email-password.component';

const routes: Routes = [
  { path: 'reset-password', component:SendEmailPasswordComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
