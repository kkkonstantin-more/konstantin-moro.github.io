import React, { useEffect } from 'react';

import useStyles from './style';
import { Accordion, AccordionDetails, AccordionSummary, Button, CircularProgress } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import useStores from '../../stores';
import { toJS } from 'mobx';

const FarewellPage = () => {
  const classes = useStyles();

  const stores = useStores();
  const { mainStore } = stores;
  const { farewellPageContent, fetchFarewellPageContent } = mainStore;

  useEffect(() => {
    (async () => {
      if (!farewellPageContent) {
        await fetchFarewellPageContent();
      }
    })();
  }, []);

  if (!farewellPageContent) {
    return <CircularProgress />;
  }

  console.log(toJS(farewellPageContent));

  const { textInfo, textBurialPlace, photo } = farewellPageContent;

  return (
    <div className={classes.root}>
      <div className={classes.info}>{textInfo}</div>

      <Button className={classes.sendCondolenceButton} variant="outlined" color="primary">
        Оставить соболезнования
      </Button>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <b>Отпевание (видео)</b>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <b>Открытки с соболезнованиями</b>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <b>Место захоронения</b>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.burialPlaceSection}>
            <img
              className={classes.burialPlacePhoto}
              src={photo.photoUrl}
              width={photo.dimensions.width}
              height={photo.dimensions.height}
            />
            <div className={classes.burialPlaceDescription}>{textBurialPlace}</div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default observer(FarewellPage);
