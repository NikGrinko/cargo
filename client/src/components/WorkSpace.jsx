import React from 'react';

import { Switch, Route } from 'react-router-dom';
import RequisitionList from './RequisitionList';
import FormAddRequisition from './Form';
import OpenRequisition from './OpenRequisition';
import { useSelector } from 'react-redux';
const WorcSpace = () => {

    const { linkToOpenRequisition } = useSelector(({ applications }) => applications);

    return (
        <div className='work-space'>
            <Switch>
                <Route exact path='/' render={() => <RequisitionList />} />
                <Route exact path='/new-requisition' render={() => <FormAddRequisition />} />
                <Route exact path={`/requisition/${linkToOpenRequisition}`} render={() => <OpenRequisition />} />
            </Switch>
        </div>
    )
}

export default WorcSpace;