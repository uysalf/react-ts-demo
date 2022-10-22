import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
} | null;
const User = () => {
  //   const [user, setUser] = useState<AuthUser | null>(null);
  //   const [user, setUser] = useState<AuthUser>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Fatih",
      email: "fuysal87@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h1>User.tsx</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
