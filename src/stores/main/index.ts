import { action, observable, computed } from 'mobx';
import { LoginPageText } from './interface';
import axios from 'axios';
import { LoginInputs } from '../../pages/WelcomePage/LoginForm/interface';

export default class MainStore {
  @observable loginPageText: LoginPageText | null = null;
  @observable token: string | null = null;

  constructor() {
    const token = localStorage.getItem('token');

    if (token) {
      this.token = token;
    }
  }

  @action fetchLoginPageText = async (): Promise<void> => {
    const res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/login-page`,
    });
    this.loginPageText = res.data;
  };

  @action setUserToken = (token: string) => {
    this.token = token;
    localStorage.setItem('token', token);
  };

  @action registerUser = async (data: LoginInputs): Promise<void> => {
    const res = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/auth/local/register`,
      data,
    });

    if (res.data.jwt) {
      this.setUserToken(res.data.jwt);
    }
  };

  @action loginUser = async (data: { identifier: string; password: string }) => {
    const res = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/auth/local`,
      data,
    });

    if (res.data.jwt) {
      this.setUserToken(res.data.jwt);
    }
  };
}
