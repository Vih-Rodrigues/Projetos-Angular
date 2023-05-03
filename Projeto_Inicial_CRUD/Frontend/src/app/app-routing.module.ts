import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
  // Sempre que estiver no path raiz, navegue para HomeComponent
  path: "",
  component: HomeComponent
  },
  {
    // Sempre que estiver no path products, navegue para ProductCrudComponent
    path: "products",
    component: ProductCrudComponent
  },
  {
    // Sempre que estiver no path create, navegue para ProductCreateComponent
    path: "product/create",
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
