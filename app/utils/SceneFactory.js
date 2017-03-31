import React from 'react';
import HomeScene from '../views/home/HomeScene';

export default class SceneFactory {

  static create(route) {
    switch(route.type) {
      case 'home': return (<HomeScene {...route.passProps} />);
    }
  }
}
