import React from 'react';

import { Switch, Route } from 'react-router-dom';
import RequisitionList from './RequisitionList';
import FormAddRequisition from './Form';
const WorcSpace = () => {
    return (
        <div className='work-space'>
            <Switch>
                <Route exact path='/' render={() => <RequisitionList />} />
                <Route exact path='/new-requisition' render={() => <FormAddRequisition />} />
            </Switch>
        </div>
    )
}

export default WorcSpace;