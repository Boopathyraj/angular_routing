import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component'
import { ExampleComponent } from "./example/example.component";
import { SubChildComponent } from "./sub-child/sub-child.component";
// import { ExampleComponent } from "./example/example.component";

const APP_ROUTES:Routes=[
  {path:'', redirectTo:'/user',pathMatch:'full'},
  {path:'admin',component:AdminComponent, children: [
    // { path: '', redirectTo: '/example', pathMatch: 'full' },
    { path: 'login', component: ExampleComponent,children:[
      {path:'logout',component:SubChildComponent }
    ]}
  ]},
  {path:'user',component:UserComponent}
]

export const routing=RouterModule.forRoot(APP_ROUTES);




// , children: [
//     // { path: '', redirectTo: '/ex', pathMatch: 'full' },
//     { path: 'ex', component: ExampleComponent}]