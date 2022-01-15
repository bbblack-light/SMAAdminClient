import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserLoginDataDto, UserProfileImageChangeDto, UserRoleDto } from '../model/User';


@Injectable()
export class UserService {
    constructor(private apiRequest: ApiRequestService) {}

    getLoginUser(): Observable<any> {
        return this.apiRequest.get('user')
            .pipe(map(this.mapUser));
    }

    edit(model: UserLoginDataDto): Observable<any> {
        return this.apiRequest.post('edit/user', model, true, "Пользователь изменен");
    }

    editUser(user: User): Observable<any> {
        return this.apiRequest.put('edit/editUser', user, true, "Пользователь изменен");
    }

    editProfileImage(user: UserProfileImageChangeDto): Observable<any> {
        return this.apiRequest.post('user/profile/image', user, true, "Пользователь изменен")
    }

    changeStatus(user: User): Observable<any> {
        return this.apiRequest.post('user/status', user);
    }
    getUsersWithoutGroup(): Observable<any> {
        return this.apiRequest.get('user/withoutGroup')
            .pipe(map(map(this.mapUser)));
    }

    getUsers(): Observable<any> {
        return this.apiRequest.get('users')
            .pipe(map(map(this.mapUser)));
    }

    changeRole(user: UserRoleDto): Observable<any> {
        return this.apiRequest.post('editRole', user, true, 'Роль изменена').pipe(map(result => {
            return Object.assign({}, result, {
                operationMessage: result.operationMessage
            });
        }));
    }

    editName(userId: string, user: User): Observable<any> {
        return this.apiRequest.put(`editName/${userId}`, user, true, 'Имя изменено');
    }

    editEmail(userId: string, user: User): Observable<any> {
        return this.apiRequest.put(`editEmail/${userId}`, user, true, 'Email изменен');
    }

    editPhoneNumber(userId: string, user: User): Observable<any> {
        return this.apiRequest.put(`editPhone/${userId}`, user, true, 'Номер телефона изменен');
    }

    editGender(userId: string, user: User): Observable<any> {
        return this.apiRequest.put(`editGender/${userId}`, user, true, 'Пол изменен');
    }

    editPassword(user: User): Observable<any> {
        return this.apiRequest.put(`editPassword/${user.userId}`, user, true, 'Пароль изменен');
    }
    getUserInfo(userId:string){
        return this.apiRequest.get(`user/info/${userId}`).pipe(map(this.mapUser));
    }
    
    private mapUser(v: any, i?, a?): User {
        const user = new User(
            v.userId,
            v.firstName,
            v.lastName,
            v.position,
            v.role,
            v.email,
            v.company,
            v.groupId,
            v.groupStatus
        );
        user.image = v.profileImage;
        if (user.image == null) {
            user.image = {
                filename: '',
                filetype: '',
                isShow: true,
                sort: 0,
                url: 'assets/images/courses/img.jpg'
            };
        }
        return user;
    }
}
