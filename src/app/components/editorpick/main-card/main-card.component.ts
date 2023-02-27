import { Component, OnInit } from '@angular/core';
import { EditorPickDataProvider } from 'src/app/services/editorpicks-data-provider.service';
@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less'],
})
export class MainCardComponent implements OnInit {
  constructor(private editorPickDataProvider: EditorPickDataProvider) {}
  post: any = '';
  ngOnInit(): void {
    this.editorPickDataProvider.fetchPosts('');
    this.editorPickDataProvider.dataProvider.subscribe(
      (res) => (this.post = res[1])
    );
  }
}
