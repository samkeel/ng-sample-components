import { Directive, HostListener, Inject, Input } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Directive({
  selector: '[appCopy]',
})
export class CopyDirective {
  @Input() appCopy = '';

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
    public snackbarService: SnackbarService
  ) {}

  @HostListener('click')
  public async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      console.log(this.appCopy);
      this.document.execCommand('copy');
      this.snackbarService.callSnackbar('Copied successfully');      
    } catch {
      this.snackbarService.callSnackbar('Copy failed.');
    }
  }
}
