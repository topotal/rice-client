import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Window from '../../common/Window';
import Const from '../../../styles/Const';
import styles from '../../../styles/timelineNav/timeline/TimelineWindowStyle';

/**
 * プロフィール画面クラスです。
 */
export default class ProfileWindow extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Window {...this.props}
        title="プロフィール"
        backButtonDisabled={true}>
      </Window>
    );
  }
}
