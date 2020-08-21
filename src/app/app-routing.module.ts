import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LAdminComponent } from './l-admin/l-admin.component';
import { LUserComponent } from './l-user/l-user.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [
  {path: '' , component: WelcomeComponent},
  {path: 'ladmin' , component: LAdminComponent},
  {path:'luser', component:LUserComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}, 
  {path:'userhome', component:UserhomeComponent},
  {path:'adminhome', component:AdminhomeComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
