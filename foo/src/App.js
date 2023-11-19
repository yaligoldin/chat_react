import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ChatScreen from './ChatScreen';
import { useState } from 'react';
import PrivateRoutes from './PrivateRoute';

const users = [];
function App() {
  const [auth, setAuth] = useState(false);

  function registerUser(username, password, displayName, picture) {
    const newUser = {
      username: username,
      password: password,
      displayName: displayName,
      picture: picture
    };

  users.push(newUser);
}

  return (
    <Router>
        <Routes>
            <Route element={<PrivateRoutes auth={auth} />}>
                <Route element={<ChatScreen/>} path="/chats"/>
            </Route>        
        <Route exact path="/" element={<LoginScreen users={users} setAuth={setAuth}/>}></Route>
        <Route exact path="/register" element={<RegisterScreen users={users} registerUser={registerUser} setAuth={setAuth}/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
