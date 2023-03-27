import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './services/interceptor/token.interceptor';

// MODULES
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig } from "ngx-ui-loader";
import { SharedModule } from './modules/shared/shared.module';
import { NgxHotjarModule } from 'ngx-hotjar';
import { environment } from 'src/environments/environment';

const LOADER_CONFIG: NgxUiLoaderConfig = {
  "pbColor": "#f75c52",
  "fgsType": "ball-scale-multiple",
  "fgsColor": "#f75c52",
  "fgsPosition": "center-center",
  "fgsSize": 100,
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(LOADER_CONFIG),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    SharedModule,
    NgxHotjarModule.forRoot(environment.hotjar_key)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
