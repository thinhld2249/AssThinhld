import { reactive } from "vue";

const user = reactive({
  email: null,
  password: null,
  name: null,
});

export function useUser() {
  const login = (email, password = null, name = null) => {
    user.email = email;
    user.password = password;
    user.name = name;
    localStorage.setItem("login", JSON.stringify(user));
  };

  const logout = () => {
    user.email = null;
    user.password = null;
    user.name = null;
    localStorage.removeItem("login");
  };

  const loadUser = () => {
    const storedUser = localStorage.getItem("login");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      user.email = parsedUser.email;
      user.password = parsedUser.password;
      user.name = parsedUser.name;
    }
  };

  return {
    user,
    login,
    logout,
    loadUser,
  };
}
