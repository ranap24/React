import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/SignUp.jsx';

function App() {
  console.log("app rendered");
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}

export default App;
