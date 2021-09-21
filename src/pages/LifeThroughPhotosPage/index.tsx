import React from 'react';

import useStyles from './style';
import { Accordion, AccordionDetails, AccordionSummary, CircularProgress } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { PhotoWithDescription } from '../../stores/main/interface';

const LifeThroughPhotosPage = () => {
  const classes = useStyles();
  const { mainStore } = useStores();
  const {
    photosFromRussia,
    photosFromNetherlands,
    photosFromBelgium,
    fetchRussiaPhotos,
    fetchNetherlandsPhotos,
    fetchBelgiumPhotos,
  } = mainStore;

  const photoSections = [
    { title: '1993-2001 Россия', photos: photosFromRussia, fetchPhotos: fetchRussiaPhotos },
    { title: '2001-2009 Нидерланды', photos: photosFromNetherlands, fetchPhotos: fetchNetherlandsPhotos },
    { title: '2009-2021 Бельгия', photos: photosFromBelgium, fetchPhotos: fetchBelgiumPhotos },
  ];

  function expandPhotosSection(fetchPhotos: () => Promise<void>, photos: any): () => Promise<void> {
    return async () => {
      if (!photos) {
        await fetchPhotos();
      }
    };
  }

  return (
    <div className={classes.root}>
      {photoSections.map((section) => {
        const { title, photos, fetchPhotos } = section;

        return (
          <Accordion key={title}>
            <AccordionSummary onClick={expandPhotosSection(fetchPhotos, photos)} expandIcon={<ExpandMore />}>
              <b>{title}</b>
            </AccordionSummary>
            <AccordionDetails>
              {photos ? (
                <div className={classes.imageContainers}>
                  {photos.length === 0 ? (
                    <span>В данном разделе пока что нет фотографий...</span>
                  ) : (
                    photos.map((item: PhotoWithDescription, i: number) => {
                      const { photoUrl, description, dimensions } = item;
                      const { width, height } = dimensions;

                      return (
                        <div
                          key={item.photoUrl}
                          className={clsx(classes.imageContainer, i % 2 === 0 && classes.imageContainerReverse)}
                        >
                          <div
                            className={clsx(classes.imageDescription, i % 2 === 0 && classes.imageDescriptionReverse)}
                          >
                            {description}
                          </div>
                          <img className={classes.photo} src={photoUrl} height={height} width={width} />
                        </div>
                      );
                    })
                  )}
                </div>
              ) : (
                <CircularProgress />
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default observer(LifeThroughPhotosPage);
