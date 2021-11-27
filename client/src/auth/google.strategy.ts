import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { Strategy, VerifyCallback } from 'passport-google-oauth20'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy,'google') {

    constructor() {
        super({
            clientID: '628598715675-olvlgachmar35l8jtvtbmqqtjc3le0k0.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/user/auth/google/callback',
            scope: ['email','profile'],
        })
    }

    async validate(accessToken: string, refreshToken: string,profile: any, done: VerifyCallback): Promise<any> {
        const {name,emails, photos } = profile;

        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        done(null,user)
    }
}