const getToken = () => JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).body.token;

export {
    getToken
}