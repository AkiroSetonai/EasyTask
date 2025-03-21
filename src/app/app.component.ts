import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent],
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log(`Usuario selecionado com a id ${id}`);
  }
}
