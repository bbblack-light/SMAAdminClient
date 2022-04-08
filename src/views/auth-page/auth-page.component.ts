import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(
    private oauthService: OAuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let token = this.route.snapshot.params['access_token'];
  }

}
