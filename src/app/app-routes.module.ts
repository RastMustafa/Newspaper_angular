import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
const appRoute: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category', component: CategoriesPageComponent },
  { path: 'category/:id', component: CategoryPageComponent },
  //    {path:'not-found',NotFoundPage},
  { path: 'not-found', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
