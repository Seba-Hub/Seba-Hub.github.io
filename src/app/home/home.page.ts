import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isMobile: boolean;

  constructor(private platform: Platform, private sanitizer: DomSanitizer) {
    this.isMobile = this.platform.is('mobile');
  }

  descargarApk() {
    // URL de GitHub Pages para tu archivo APK
    const apkUrl = 'kitsune12333.github.io/apkduoc/app-release.apk';
  
    // Crea un enlace de descarga y haz clic en él programáticamente
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'app-release.apk';
    link.target = '_blank'; // Abrir en una nueva pestaña
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}