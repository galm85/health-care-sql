import {Route} from 'react-router-dom';

//Components
import Navbar from './components/navbar';

//Pages
import HomePage from './pages/homePage';
import Doctors from './pages/doctors';
import AddDoctor from './pages/addDoctor';
import Register from './pages/register';
import ClinicPage from './pages/clinicsPage';
import SigninPage from './pages/signinPage';
import AdminPage from './pages/adminPage';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header><Navbar/></header>
      <main className="flex-fill">
        <div className="container">
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/doctors" component={Doctors}/>
            <Route exact path="/add-doctor" component={AddDoctor}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/clinics" component={ClinicPage}/>
            <Route exact path="/sign-in" component={SigninPage}/>
            <Route exact path="/admin" component={AdminPage}/>
        </div>
      </main>
      <footer>Gal Mizrahi &copy; {new Date().getFullYear()}</footer>


    </div>
  
  );
}

export default App;
