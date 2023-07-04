import useInput from '@/hooks/useInput';
import { css } from '@emotion/react';

const Login = () => {
  const [id, setId, onChangeId] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !password) return;
    setId('');
    setPassword('');
  };

  return (
    <form css={formStyle} onSubmit={onSubmit}>
      <input value={id} onChange={onChangeId} />
      <input type='password' value={password} onChange={onChangePassword} />
      <button type='submit'>Login</button>
    </form>
  );
};

const formStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

export default Login;
