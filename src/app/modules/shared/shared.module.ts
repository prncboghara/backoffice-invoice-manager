import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessMessageComponent } from 'src/app/components/shared/success-message/success-message.component';
import { ErrorMessageComponent } from 'src/app/components/shared/error-message/error-message.component';
import { ConfirmationComponent } from 'src/app/components/shared/confirmation/confirmation.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { SidebarComponent } from 'src/app/components/shared/sidebar/sidebar.component';
import { InvoiceStatusComponent } from 'src/app/components/shared/invoice-status/invoice-status.component';

@NgModule({
  declarations: [
    SuccessMessageComponent,
    ErrorMessageComponent,
    ConfirmationComponent,
    HeaderComponent,
    SidebarComponent,
    InvoiceStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,

    // components
    HeaderComponent,
    SuccessMessageComponent,
    ErrorMessageComponent,
    ConfirmationComponent,
    SidebarComponent,
    InvoiceStatusComponent
  ],
})
export class SharedModule { }
