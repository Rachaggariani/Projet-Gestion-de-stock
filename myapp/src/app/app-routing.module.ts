import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnecterComponent } from './components/connecter/connecter.component';
import { ContactComponent } from './components/contact/contact.component';
import { CountmaterialComponent } from './components/countmaterial/countmaterial.component';
import { CreatematerialComponent } from './components/creatematerial/creatematerial.component';
import { HomeComponent } from './components/home/home.component';
import { ListmaterialComponent } from './components/listmaterial/listmaterial.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

const routes: Routes = [{
path:'',component:ListmaterialComponent,
canActivate: [AuthGuard]},
    
{path:'createMaterial',component:CreatematerialComponent},
{path:'editmaterial/:id',component:CreatematerialComponent},
{path:'detailsmaterial/:id',component:CountmaterialComponent},
{path:'Home',component:HomeComponent},
{path:'Contact',component:ContactComponent},
{path:'About',component:AboutComponent},
{path:'connecter',component:ConnecterComponent},

{path:'**',component:NotfoundpageComponent},
{path:'',redirectTo:'',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 