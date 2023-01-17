import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import * as modals from './modal/index';

export const components: any[] = [
  HeaderComponent,
  MenuComponent,
  SpinnerComponent,
  ...modals.modals,
];

export * from './index';
