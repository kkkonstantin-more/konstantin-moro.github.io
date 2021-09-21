import { action, observable, computed, toJS } from 'mobx';
import { AboutSergeyPageText, LoginPageText } from './interface';
import axios from 'axios';
import { LoginInputs } from '../../pages/WelcomePage/LoginForm/interface';

export default class MainStore {
  @observable token: string | null = null;

  @observable loginPageText: LoginPageText | null = null;
  @observable aboutSergeyPageText: AboutSergeyPageText | null = null;

  @observable russiaPhotos: any[] | null = null;

  constructor() {
    const token = localStorage.getItem('token');

    if (token) {
      this.token = token;
    }
  }

  @computed get photosFromRussia():
    | {
        photoUrl: string;
        description: string;
        dimensions: {
          width: number;
          height: number;
        };
      }[]
    | null {
    if (!this.russiaPhotos) {
      return null;
    }

    return this.russiaPhotos.map((item) => {
      const photo = item.photo.formats?.small ?? item.photo.formats.thumbnail;

      return {
        description: item.textDescription,
        photoUrl: `${process.env.REACT_APP_API_URL}${photo.url}`,
        dimensions: {
          width: photo.width,
          height: photo.height,
        },
      };
    });
  }

  @action fetchLoginPageText = async (): Promise<void> => {
    const res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/login-page`,
    });
    this.loginPageText = res.data;
  };

  @action fetchAboutSergeyPageText = async (): Promise<void> => {
    const res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/about-sergey-page`,
    });
    this.aboutSergeyPageText = res.data;
  };

  @action fetchRussiaPhotos = async (): Promise<void> => {
    const res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/russia-photos`,
    });
    console.log(res.data);
    this.russiaPhotos = res.data;
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
