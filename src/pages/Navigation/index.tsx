import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import useStyles from './style';
import clsx from 'clsx';
import { NavigationTab } from './interface';
import { MenuItem, Select } from '@material-ui/core';

const Navigation = () => {
  const classes = useStyles();

  const history = useHistory();
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
      name: 'Без Сергея',
      path: '/without-sergey',
    },
  ];

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(-1);

  const isMobile = window.innerWidth < 600;

  useEffect(() => {
    setSelectedTabIndex(tabs.findIndex((tab: NavigationTab) => tab.path === pathname));
  }, [pathname]);

  if (isMobile) {
    return (
      <div className={classes.rootMobile}>
        <Select
          color="primary"
          className={classes.selectMobile}
          // style={{ color: 'white' }}
          value={selectedTabIndex}
          onChange={(e: any) => {
            setSelectedTabIndex(e.target.value);
          }}
        >
          {tabs.map((tab: NavigationTab, i: number) => {
            const { name, path } = tab;

            return (
              <MenuItem value={i} onClick={() => history.push(path)}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        {tabs.map((tab: NavigationTab, i: number) => {
          const { name, path } = tab;
          return (
            <Link key={name} to={path} className={clsx(classes.tab, i === selectedTabIndex && classes.tabSelected)}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
