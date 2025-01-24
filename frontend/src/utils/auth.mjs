export const logout = () =>{
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    window.location.href = "/auth/login";
};