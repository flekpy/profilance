import { userData } from '../data/userData';

export default function checkIsAuth({ login, password }) {
  const candidateLogin = userData.find((item) => item.login === login);
  if (!candidateLogin) {
    return { message: 'Пользователь не найден' };
  }

  const validPassword = userData.find((item) => item.password === password);
  if (!validPassword) {
    return { message: 'Неверный пароль' };
  }

  return { login: candidateLogin.login, role: candidateLogin.role };
}
