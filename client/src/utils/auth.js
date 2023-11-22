import decode from "jwt-decode";

class AuthService {
  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/home");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/login");
  }

  isTokenExpired(token) {
    const decoded = decode(token);

    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  loggedIn() {
    const token = this.getToken();

    return token && !this.isTokenExpired(token) ? true : false;
  }

  getUser() {
    return decode(this.getToken());
  }
}

export default new AuthService();
