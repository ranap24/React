import { Link,Form, useSearchParams, useActionData, useNavigation } from 'react-router-dom';


import classes from './AuthForm.module.css';

function AuthForm() {
 const [searchParams] = useSearchParams();
 const navigation = useNavigation();
 const isSubmitting = navigation.state === 'submitting';

const isLogin = searchParams.get('mode') === 'login';
const data = useActionData();

  return (
    <>
    {data && data.errors && <ul>
      {Object.values(data.errors).map((err)=><li key={err}>{err}</li>)}
      </ul>}
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to = {`?mode=${isLogin ? 'signup' : 'login' }`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled = {isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
