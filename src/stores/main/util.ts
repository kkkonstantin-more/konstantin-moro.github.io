import { Photo, PhotoWithDescription } from './interface';

export function parsePhotos(photos: any[]): PhotoWithDescription[] {
  console.log(photos);
  return photos.map((item: any) => {
    return { ...parsePhoto(item.photo), description: item.textDescription };
  });
}

export function parsePhoto(item: any): Photo {
  const photo = item.formats?.small ?? item.formats.thumbnail;

  return {
    photoUrl: `${process.env.REACT_APP_API_URL}${photo.url}`,
    dimensions: {
      width: photo.width,
      height: photo.height,
    },
  };
}
