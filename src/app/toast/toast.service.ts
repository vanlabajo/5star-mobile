import { Injectable } from '@angular/core';
import { Toast } from './toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  show(text: string) {
    this.toasts.push({ text: text });
  }

  showWarning(text: string) {
    this.toasts.push({ text: text, classname: 'bg-warning text-light' });
  }

  showSuccess(text: string) {
    this.toasts.push({ text: text, classname: 'bg-cool text-light' });
  }

  showError(text: string) {
    this.toasts.push({ text: text, classname: 'bg-danger text-light' });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
