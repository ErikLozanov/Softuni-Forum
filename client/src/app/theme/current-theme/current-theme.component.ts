import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css'
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchTheme();
  }

  fetchTheme():void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe((newTheme) => {
      this.theme = newTheme;
    });
  }
}
