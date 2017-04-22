import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
import { Navigation } from '../pages/navigation/navigation';
import { Popover } from '../pages/popover/popover';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Action Sheets', component: ActionSheets },
      { title: 'Alerts', component: Alerts },
      { title: 'Badges', component: Badges },
      { title: 'Buttons', component: Buttons },
      { title: 'Cards', component: Cards },
      { title: 'Checkbox', component: Checkbox },
      { title: 'DateTime', component: Datetime },
      { title: 'FABs', component: Fabs },
      { title: 'Gestures', component: Gestures },
      { title: 'Grid', component: Grid },
      { title: 'Icons', component: Icons },
      { title: 'Inputs', component: Inputs },
      { title: 'Lists', component: Lists },
      { title: 'Loading', component: Loading },
      { title: 'Menus', component: Menus },
      { title: 'Modals', component: Modals },
      { title: 'Navigation', component: Navigation },
      { title: 'Popover', component: Popover },
      { title: 'Radio', component: Radio },
      { title: 'Range', component: Range },
      { title: 'Searchbar', component: Searchbar },
      { title: 'Segment', component: Segment },
      { title: 'Selects', component: Selects },
      { title: 'Slides', component: Slides },
      { title: 'Tabs', component: Tabs },
      { title: 'Toast', component: Toast },
      { title: 'Toggle', component: Toggle },
      { title: 'Toolbar', component: Toolbar }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
