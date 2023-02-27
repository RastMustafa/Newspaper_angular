// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routes.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryNavComponent } from './components/navbar/category-nav/category-nav.component';
import { NavHeroComponent } from './components/navbar/nav-hero/nav-hero.component';
import { SliderHeroComponent } from './components/slider-hero/slider-hero.component';
import { EditorpickComponent } from './components/editorpick/editorpick.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { MainCardComponent } from './components/editorpick/main-card/main-card.component';
import { OneSlideSectionComponent } from './components/one-slide-section/one-slide-section.component';
import { HompageCategoriesSectionComponent } from './components/hompage-categories-section/hompage-categories-section.component';
import { CategoryPageTemplateComponent } from './components/category-page-template/category-page-template.component';
import { CategoryMainCardComponent } from './components/category-page-template/main-card/main-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsCardImagesComponent } from './components/news-card-images/news-card-images.component';

// pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

// directives
import { ScrollDirective } from './directives/sticky-nav.directive';
import { PaginationBtnsDirective } from './directives/pagination-btn.directive';
import { PaginationHolderDirective } from './directives/pagination-holder.directive';

// services
import { CategoryFetchService } from './services/category-fetch.service';
import { UrlCreator } from './helpers/url-creator.helper';
import { HomePageDataStorage } from './services/home-page-data-storage.service';
import { SliderHeroDataProvider } from './services/slider-hero-data-provider.service';
import { EditorPickDataProvider } from './services/editorpicks-data-provider.service';
import { HomepageCategoriesDataProvider } from './services/homepage-categories-data-provider.service';
import { LoadingIndecatortComponent } from './components/loading-indicator/loading-indecatort.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryNavComponent,
    NavHeroComponent,
    SliderHeroComponent,
    EditorpickComponent,
    NewsCardComponent,
    MainCardComponent,
    OneSlideSectionComponent,
    HompageCategoriesSectionComponent,
    CategoryPageTemplateComponent,
    CategoryMainCardComponent,
    FooterComponent,
    ScrollDirective,
    NotFoundPageComponent,
    HomepageComponent,
    CategoriesPageComponent,
    CategoryPageComponent,
    NewsCardImagesComponent,
    PaginationBtnsDirective,
    PaginationHolderDirective,
    LoadingIndecatortComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    FormsModule
  ],
  providers: [
    CategoryFetchService,
    UrlCreator,
    HomePageDataStorage,
    SliderHeroDataProvider,
    EditorPickDataProvider,
    HomepageCategoriesDataProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
