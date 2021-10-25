import AuthenticationService from '../Components/AuthenticationService'

class SignUpRepository
{
    getSecurityQuestions()
    {
        return AuthenticationService.getAPI('getSecurityQuestions');
    }

    getGenres()
    {
        return AuthenticationService.getAPI('getGenres');
    }

    createAccount(params)
    {
        return AuthenticationService.postAPI('createAccount', params);
    }
}

export default new SignUpRepository()