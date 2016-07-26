import {inject} from 'aurelia-framework';
import {EditPerson} from './edit-person';
import {DialogService} from 'aurelia-dialog';
import 'material-design-lite';

@inject(DialogService)
export class App {
  person = { firstName: 'Wade', middleName: 'Owen', lastName: 'Watts' };

  constructor(dialogService) {
      this.dialogService = dialogService;
  }

  attached() {
      componentHandler.upgradeDom();
  }

  openDialog() {
    this.dialogService.open({ viewModel: EditPerson, model: this.person}).then(response => {
        if (!response.wasCancelled) {
            console.log('good - ', response.output);
        } else {
            console.log('bad');
        }
        console.log(response.output);
    });
  }
}
