import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getDuration } from '../util/getToken';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(()=>{

    const expiration = getDuration();

    if(!token)
    {
      return;
    }
    if(token === 'EXPIRED')
    {
      submit(null,{method:'post',action : '/logout'})
    }
    console.log(expiration);
    setTimeout(()=>{
      submit(null,{method:'post',action : '/logout'})

    },expiration)


  },[token,submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;


