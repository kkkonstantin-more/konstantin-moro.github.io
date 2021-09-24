import { action, observable, computed } from 'mobx';
import { AboutSergeyPageText, FarewellPageContent, LoginPageText, PhotoWithDescription, UserData } from './interface';
import axios from 'axios';
import { LoginInputs } from '../../pages/LoginPage/LoginForm/interface';
import { parsePhoto, parsePhotos } from './util';
import { RouteComponentProps } from 'react-router-dom';

export default class MainStore {
  @observable token: string | null = null;
  @observable userData: UserData | null = null;

  // pages content
  @observable loginPageText: LoginPageText | null = null;
  @observable aboutSergeyPageText: AboutSergeyPageText | null = null;
  @observable farewellPageContent: FarewellPageContent | null = null;

  // photos
  @observable russiaPhotos: any[] | null = null;
  @observable netherlandsPhotos: any[] | null = null;
  @observable belgiumPhotos: any[] | null = null;

  constructor() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && username) {
      this.userData = { token, username };
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

  // fetch page content
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
      headers: {
        Authorization: `Bearer ${this.userData?.token}`,
      },
    });
    this.aboutSergeyPageText = res.data;
  };

  @action fetchFarewellPageContent = async (): Promise<void> => {
    const res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/farewell-page`,
    });

    this.farewellPageContent = {
      ...res.data,
      photo: parsePhoto(res.data.photoBurialPlace),
    };
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

  @action loginUser = async (
    data: { identifier: string; password: string },
    history: RouteComponentProps['history']
  ) => {
    const res = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/auth/local`,
      data,
    });

    if (res.data.jwt && res.data.user?.username) {
      this.userData = { username: res.data.user.username, token: res.data.jwt };
      localStorage.setItem('token', res.data.jwt);
      localStorage.setItem('username', res.data.user.username);
    }

    history.push('/about');
  };
}
