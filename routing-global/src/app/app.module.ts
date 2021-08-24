import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { AppHttpInterceptorService } from './services/app-http-interceptor.service';
import { AppInitializerService } from './services/app-initializer.service';
import { DataService } from './services/data.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { LimitPipe } from './pipes/limit.pipe';
import { SharedModule } from './shared/shared.module';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TakeinputComponent } from './takeinput/takeinput.component';
// import { ChangeclassDirective } from './directives/changeclass.directive';

export function appInitializerFactory(appInitializer: AppInitializerService) {
  return () => appInitializer.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ProductsComponent,
    LimitPipe,
    TemplateformComponent,
    ReactiveformComponent,
    // TakeinputComponent,
    // ChangeclassDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppInitializerService,
    DataService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AppInitializerService, DataService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
