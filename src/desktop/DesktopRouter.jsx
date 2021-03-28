import { Switch, Route} from 'react-router-dom';
import Contact from './contact/Contact';
import DesktopBase from './DesktopBase';
import Services from './services/Services';

function DesktopRouter(){
    return (
        <Switch>
            <Route exact path='/services'>
                <Services />
            </Route>
            <Route exact path='/contact'>
                <Contact contactProps={{name: '', email: ''}}/>
            </Route>
            <Route path='/'>
                <DesktopBase />
            </Route>
        </Switch>
    )
};

export default DesktopRouter;
