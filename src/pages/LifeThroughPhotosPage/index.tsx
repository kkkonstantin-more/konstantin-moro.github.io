import React from 'react';

import useStyles from './style';
import { Accordion, AccordionDetails, AccordionSummary, CircularProgress } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

const LifeThroughPhotosPage = () => {
  const classes = useStyles();
  const { mainStore } = useStores();
  const { photosFromRussia, fetchRussiaPhotos } = mainStore;

  async function expandRussiaPhotos() {
    if (!photosFromRussia) {
      await fetchRussiaPhotos();
    }
  }

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary onClick={expandRussiaPhotos} expandIcon={<ExpandMore />}>
          1993-2001 Россия
        </AccordionSummary>
        <AccordionDetails>
          {photosFromRussia ? (
            <div className={classes.imageContainers}>
              {photosFromRussia.map((item, i: number) => (
                <div
                  key={item.photoUrl}
                  className={clsx(classes.imageContainer, i % 2 === 0 && classes.imageContainerReverse)}
                >
                  <div className={classes.imageDescription}>{item.description}</div>
                  <img
                    className={classes.photo}
                    src={item.photoUrl}
                    height={item.dimensions.height}
                    width={item.dimensions.width}
                  />
                </div>
              ))}
            </div>
          ) : (
            <CircularProgress />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>2001-2009 Нидерланды</AccordionSummary>
        <AccordionDetails>Accordion 1</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>2009-2021 Бельгия</AccordionSummary>
        <AccordionDetails>Accordion 1</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default observer(LifeThroughPhotosPage);
