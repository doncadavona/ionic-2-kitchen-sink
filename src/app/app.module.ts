import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionSheets } from '../pages/action-sheets/action-sheets';
import { Alerts } from '../pages/alerts/alerts';
import { Badges } from '../pages/badges/badges';
import { Buttons } from '../pages/buttons/buttons';
import { Cards } from '../pages/cards/cards';
import { Checkbox } from '../pages/checkbox/checkbox';
import { Datetime } from '../pages/datetime/datetime';
import { Fabs } from '../pages/fabs/fabs';
import { Gestures } from '../pages/gestures/gestures';
import { Grid } from '../pages/grid/grid';
import { Icons } from '../pages/icons/icons';
import { Inputs } from '../pages/inputs/inputs';
import { Lists } from '../pages/lists/lists';
import { Loading } from '../pages/loading/loading';
import { Menus } from '../pages/menus/menus';
import { Modals } from '../pages/modals/modals';
import { ModalPage } from '../pages/modals/modal-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheets,
    Alerts,
    Badges,
    Buttons,
    Cards,
    Checkbox,
    Datetime,
    Fabs,
    Gestures,
    Grid,
    Icons,
    Inputs,
    Lists,
    Loading,
    Menus,
    Modals,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheets,
    Alerts,
    Badges,
    Buttons,
    Cards,
    Checkbox,
    Datetime,
    Fabs,
    Gestures,
    Grid,
    Icons,
    Inputs,
    Lists,
    Loading,
    Menus,
    Modals,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
