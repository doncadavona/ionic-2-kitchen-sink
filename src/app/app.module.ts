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
import { Navigation } from '../pages/navigation/navigation';
import { NavigationDetails } from '../pages/navigation/navigation-details';
import { Popover } from '../pages/popover/popover';
import { PopoverDetails } from '../pages/popover/popover-details';
import { Radio } from '../pages/radio/radio';
import { Range } from '../pages/range/range';
import { Searchbar } from '../pages/searchbar/searchbar';
import { Segment } from '../pages/segment/segment';
import { Selects } from '../pages/selects/selects';
import { Slides } from '../pages/slides/slides';
import { Tabs } from '../pages/tabs/tabs';
import { Tab1 } from '../pages/tabs/tab1';
import { Tab2 } from '../pages/tabs/tab2';
import { Toast } from '../pages/toast/toast';
import { Toggle } from '../pages/toggle/toggle';
import { Toolbar } from '../pages/toolbar/toolbar';

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
    ModalPage,
    Navigation,
    NavigationDetails,
    Popover,
    PopoverDetails,
    Radio,
    Range,
    Searchbar,
    Segment,
    Selects,
    Slides,
    Tabs,
    Tab1,
    Tab2,
    Toast,
    Toggle,
    Toolbar,
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
    ModalPage,
    Navigation,
    NavigationDetails,
    Popover,
    PopoverDetails,
    Radio,
    Range,
    Searchbar,
    Segment,
    Selects,
    Slides,
    Tabs,
    Tab1,
    Tab2,
    Toast,
    Toggle,
    Toolbar,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
