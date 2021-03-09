import { Switch, Route} from 'react-router-dom';
import Contact from './contact/Contact';
import DesktopBase from './DesktopBase';

function DesktopRouter(){
    return (
        <Switch>
            <Route exact path='/'>
                <DesktopBase />
            </Route>
            <Route exact path='/contact'>
                <Contact contactProps={{name: '', email: ''}}/>
            </Route>
        </Switch>
    )
};

export default DesktopRouter;
