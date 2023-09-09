import Keycloak from 'keycloak-js';
import {useEffect, useRef, useState} from 'react';


const useAuth = () => {

  const [isLogin, setIsLogin] = useState(true);
  const isRun = useRef(false);

  useEffect(() => {

    if(isRun.current) return;
    isRun.current = true;

    const client = new Keycloak({
      url: 'http://192.168.1.137:8080/',
      realm: 'saif',
      clientId: 'saif_client'
    });

  
    client.init({ onLoad: 'login-required' }).then((authenticated) => {
      // if (authenticated) {
      //   console.log('User is authenticated');
      //   console.log("access token: " + keycloak.token);
      // }
      console.log('authenticated:',authenticated)
      console.log('client:',client)
    });
    
  }, [])
  


  return isLogin;
};

export default useAuth;