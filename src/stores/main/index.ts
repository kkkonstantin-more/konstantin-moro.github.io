import { action, observable, computed, toJS } from 'mobx';
import { AboutSergeyPageText, LoginPageText, PhotoWithDescription } from './interface';
import axios from 'axios';
import { LoginInputs } from '../../pages/WelcomePage/LoginForm/interface';
import { parsePhotos } from './util';

export default class MainStore {
  @observable token: string | null = null;

  // page texts
  @observable loginPageText: LoginPageText | null = null;
  @observable aboutSergeyPageText: AboutSergeyPageText | null = null;

  // photos
  @observable russiaPhotos: any[] | null = null;
  @observable netherlandsPhotos: any[] | null = null;
  @observable belgiumPhotos: any[] | null = null;

  constructor() {
    const token = localStorage.getItem('token');

    if (token) {
      this.token = token;
    }
  }

  @computed get photosFromRussia(): PhotoWithDescription[] | null {
    if (!this.russiaPhotos) {
      return null;
    }

    return parsePhotos(this.russiaPhotos);
  }

  @computed get photosFromNetherlands(): PhotoWithDescription[] | null {
    if (!this.netherlandsPhotos) {
      return null;
    }

    return parsePhotos(this.netherlandsPhotos);
  }

  @computed get photosFromBelgium(): PhotoWithDescription[] | null {
    if (!this.belgiumPhotos) {
      return null;
    }

    return parsePhotos(this.belgiumPhotos);
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

    this.russiaPhotos = res.data;
  };

  @action fetchNetherlandsPhotos = async (): Promise<void> => {
    const res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/netherlands-photos`,
    });

    this.netherlandsPhotos = res.data;
  };

  @action fetchBelgiumPhotos = async (): Promise<void> => {
    const res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/belgium-photos`,
    });

    this.belgiumPhotos = res.data;
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
