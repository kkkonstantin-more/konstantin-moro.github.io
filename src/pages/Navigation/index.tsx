import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './style';
import clsx from 'clsx';
import { NavigationTab } from './interface';
import { Paper } from '@material-ui/core';

const Navigation = () => {
  const classes = useStyles();

  const location = useLocation();
  const { pathname } = location;

  const tabs: NavigationTab[] = [
    {
      name: 'О Сергее',
      path: '/about',
    },
    {
      name: 'Жизнь в фотографиях',
      path: '/life-through-photos',
    },
    {
      name: 'Прощание',
      path: '/farewell',
    },
    {
      name: 'Воспоминания',
      path: '/memories',
    },
    {
      name: 'Без названия',
      path: '/no-name',
    },
  ];

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(-1);

  useEffect(() => {
    setSelectedTabIndex(tabs.findIndex((tab: NavigationTab) => tab.path === pathname));
  }, [pathname]);

  return (
    <div className={classes.root}>
      <Paper className={classes.tabs}>
        {tabs.map((tab: NavigationTab, i: number) => {
          const { name, path } = tab;
          return (
            <Link key={name} to={path} className={clsx(classes.tab, i === selectedTabIndex && classes.tabSelected)}>
              {name}
            </Link>
          );
        })}
      </Paper>
    </div>
  );
};

export default Navigation;
