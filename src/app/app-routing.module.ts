import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminBlogComponent } from '../app/admin-blog/admin-blog.component';
import { BlogComponent } from '../app/blog/blog.component';
const routes: Routes = [

    {path:'', component:AdminBlogComponent},
  {path:'blog', component:BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
