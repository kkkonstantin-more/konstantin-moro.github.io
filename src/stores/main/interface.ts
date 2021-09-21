export interface LoginPageText {
  textPhotoDescription: string;
  textTitle: string;
  textInfo: string;
  textLoginButton: string;
  textRequestPasswordButton: string;
}

export interface AboutSergeyPageText {
  textAboutSergey: string;
}

export interface PhotoWithDescription {
  photoUrl: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
  };
}
