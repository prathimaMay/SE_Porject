const API_URL = 'http://localhost:8080'

class AuthenticationService {

    async postAPI(route, body)
    {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        var url = `${API_URL}/${route}`;
        
        const response = await fetch(url, requestOptions);
        const data = await response.json();
    }

    async getAPI(route, params)
    {
        // GET request using fetch with async/await
        var url = `${API_URL}/${route}`;
        if(params)
            url = url + '?data=' + params;

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

export default new AuthenticationService()