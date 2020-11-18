import React, { useEffect } from 'react';
import './styles/main.scss'
import Logo from './components/Logo';
import WorkSpace from './components/WorkSpace'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequisition, redactModStatus } from './redux/actions/requisitionActions';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllRequisition());
  }, [])
  return (
    <div className="app">
      <div className='container'>
        <Logo />
        <WorkSpace />
      </div>
    </div>
  );
}
export default App;