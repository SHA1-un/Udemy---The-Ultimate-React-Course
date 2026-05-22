import Header from './components/Header.jsx';
// import Signup from './components/Signup.jsx';
import LoginControlled from './components/LoginControlled.jsx';
// import LoginUncontrolled from './components/LoginUncontrolled.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <LoginControlled />
        {/* <LoginUncontrolled /> */}
        {/* <Signup/> */}
      </main>
    </>
  );
}

export default App;
