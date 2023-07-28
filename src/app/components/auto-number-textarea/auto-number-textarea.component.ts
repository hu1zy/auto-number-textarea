import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-auto-number-textarea',
  templateUrl: './auto-number-textarea.component.html',
  styleUrls: ['./auto-number-textarea.component.scss'],
})
export class AutoNumberTextareaComponent implements DoCheck {
  @Input() height = '100px';
  @Input() width = '100%x';
  @Input() placeholder = '';
  @Input() color = 'block';

  lines: number[] = [];
  text = '';
  isFocused = false;

  @ViewChild('textarea') textarea!: ElementRef;

  ngDoCheck(): void {
    this.updateNumbers();
  }

  updateNumbers() {
    if (!this.textarea) {
      return;
    }
    this.lines = Array(this.text.split('\n').length)
      .fill(0)
      .map((v, i) => i + 1);

    console.log(this.text);
    this.textarea.nativeElement.style.height = 'auto';
    this.textarea.nativeElement.style.height =
      this.textarea.nativeElement.scrollHeight + 'px';
  }

  onTextareaFocus() {
    this.isFocused = true;
  }

  onTextareaBlur() {
    this.isFocused = false;
  }
}
