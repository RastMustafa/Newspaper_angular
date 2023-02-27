import { Component, OnInit } from '@angular/core';
import { HomePageDataStorage } from 'src/app/services/home-page-data-storage.service';
import { EditorPickDataProvider } from 'src/app/services/editorpicks-data-provider.service';
@Component({
  selector: 'app-editorpick',
  templateUrl: './editorpick.component.html',
  styleUrls: ['./editorpick.component.less'],
})
export class EditorpickComponent implements OnInit {
  constructor(private editorPickDataProvider: EditorPickDataProvider) {}
  posts: any = '';
  tredings: any = '';
  ngOnInit(): void {
    this.editorPickDataProvider.fetchPosts('');
    this.editorPickDataProvider.dataProvider.subscribe((res) => {
      this.posts = res.slice(0, 4);
      this.tredings = res.slice(4, 8);
    });

    // editorPickNewsPosts.subscribe((res) => {
    //   this.tredings = res.slice(4, 8);
    //   this.posts = res.slice(0, 4);
    // });
  }
}
