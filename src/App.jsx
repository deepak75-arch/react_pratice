import Navbar from './components/navbar';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './components/user';
import UserCard from './components/UserCard';

function App() {
  return (
    <><div className="App">

      <Header />

      <User name="John Doe" email="QHs5a@example.com" />

      <User name="Jane Doe" email="B4o0I@example.com" />

      <h1>Welcome to my React App</h1>
    </div><div>
        <Navbar />
        <UserCard name="john" email="xyz@gmail.com" designation="developer" location="bangalore" />
        <UserCard
          name="deepak"
          email="deepak@example.com"
          designation="designer"
          location="delhi"
        />
      </div>
      <Footer />
      </>
  );
}

export default App;