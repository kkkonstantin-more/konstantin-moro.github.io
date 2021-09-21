import { PhotoWithDescription } from './interface';

export function parsePhotos(photos: any[]): PhotoWithDescription[] {
  return photos.map((item: any) => {
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
