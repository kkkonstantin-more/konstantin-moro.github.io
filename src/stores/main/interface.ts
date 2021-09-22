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

export interface FarewellPageContent {
  textInfo: string;
  textBurialPlace: string;
  photo: any;
}

export interface Photo {
  photoUrl: string;
  dimensions: {
    width: number;
    height: number;
  };
}

export interface PhotoWithDescription extends Photo {
  description: string;
}
