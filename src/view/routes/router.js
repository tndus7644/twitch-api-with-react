import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Search from "../pages/Search";
import Live from "../pages/Live";


const Routes = () => {

    return(
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/search"} component={Search}/>
            <Route exact path={"/live/:id"} component={Live}/>
        </Switch>
    )
}

export default Routes;