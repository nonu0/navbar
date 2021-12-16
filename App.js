import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Contactus from './pages/Contactus'
import Product from './pages/Product'
import Services from './pages/Services'


function App() {
    return (
        <>
        <BrowserRouter>
       <Navbar/>
       <Switch>
           <Route path='/' exact component={Home}></Route>
           {/* <Route path='/contactus' exact component={Contactus}></Route> */}
           <Route path='/product' exact component={Product}></Route>
           <Route path='/services' exact component={Services}></Route>
       </Switch>
        </BrowserRouter>
    </>
    )
}


export default App