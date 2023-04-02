import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() getLanguage: EventEmitter<string> = new EventEmitter();
  changestyle = false
  @ViewChild("sLanguage")
  sLanguage!: ElementRef;
  @Input()
  styleSelect!: boolean;
  isLogged: boolean = false;
  language: any
  user = {
    full_name: "",
  }
  change_language: boolean = false;

  constructor(  private translateService: TranslateService,) {
    translateService.addLangs(['en-us', 'es-ec']);
    translateService.setDefaultLang('en-us');
    const browserLang = translateService.getBrowserLang();
    let lang = browserLang
    if (browserLang =="en-us" || browserLang =="es-ec") {
       lang = browserLang;
    }else{
       lang = 'en-us';
    }
    translateService.use(lang);
   }

  ngOnInit(): void {

    console.log("En el init")
    if (this.styleSelect == true) {
      this.changestyle = this.styleSelect
    }
    this.ValidateLanguage();
    this.translateService.onLangChange.subscribe(() => {
      this.ValidateLanguage()
    });
  }


  selectLanguage(event: any) {
    this.translateService.use(event.target.value);
    this.getLanguage.emit(event.target.value)
  }

  ValidateLanguage() {
    if (this.translateService.instant('LANG_SPANISH_EC') == "Español (ECU)") {
      this.change_language = false;
    } else {
      this.change_language = true;
    }
  }

}
