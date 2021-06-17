
import { Redirect, Route, Switch } from "react-router-dom";
import App from "../App";
import { MenuPage, GamePage } from "../pages";



export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/menupage" component={MenuPage} />
            <Route exact path="/gamepage" component={GamePage} />

            <Redirect to="/" />
        </Switch>
    );
}