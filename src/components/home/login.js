/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../layout';
import { UserContext } from './../../context/user-context';
import gsap from 'gsap';
import { navigate } from 'gatsby';
import OneGraphAuth from 'onegraph-auth';
import jwt_decode from 'jwt-decode';
import { APP_ID } from '../../butler';
import Button from '../common/button';

const Login = () => {
  const { updateUser } = React.useContext(UserContext);
  let auth =
    typeof window !== 'undefined'
      ? new OneGraphAuth({
          appId: APP_ID,
        })
      : null;

  React.useEffect(() => {
    gsap.to('body', { visibility: 'visible' });
  }, []);

  const login = () =>
    auth
      .login('github')
      .then(() => {
        auth.isLoggedIn('github').then((isLoggedIn) => {
          if (isLoggedIn) {
            // let jwt = jwt_decode(auth._accessToken.accessToken);
            // Add the users github handle, name and email to the sites context
            // updateUser({
            //   // isGithubLoggedIn: true,
            //   displayName: jwt.user.githubName,
            //   email: jwt.user.email,
            // });
            navigate('/app/hub');
          } else {
            console.log('Did not grant auth for GitHub');
          }
        });
      })
      .catch((e) => console.error('Problem logging in', e));

  return (
    <Layout>
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          backgroundColor: 'background',
        }}
      >
        <div
          sx={{
            textAlign: 'center',
            padding: 4,
            boxShadow: 0,
            border: 'solid 3px',
            maxWidth: 800,
            backgroundColor: 'background',
            m: 3,
          }}
        >
          <h1
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 500,
              fontSize: [3, 3, 5],
            }}
          >
            Looks like you're not logged in
          </h1>
          <p
            sx={{
              fontFamily: 'heading',
              color: 'text',
              fontWeight: 500,
              fontSize: [2, 2, 3],
              my: 6,
            }}
          >
            All your information is secure in your pack. Please login to gain access. By default we use your Github
            account.
          </p>

          <div
            sx={{
              margin: '0 auto',
              height: 'min-content',
              width: 'min-content',
            }}
          >
            <Button onClick={login} text="Login" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
