/**
 * ナビゲーションウィンドウクラスです。
 */
export default class NavigationWindow extends Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._renderScene = this._renderScene.bind(this);
    this._onSelectBack = this._onSelectBack.bind(this);
    this._onSelectForward = this._onSelectForward.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <Navigator
        ref="nav"
        initialRoute={this.props.initialRoute}
        renderScene={this._renderScene} />
    );
  }

  /**
   * シーンを描画します。
   */
  _renderScene(route, navigator) {
    return (
      <route.component
        onSelectBack={this._onSelect}
        onSelectForward={this._onSelectForward}
        {...route.passProps}
        />
    )
  }

  /**
   * 次のシーンを選択された際のハンドラーです。
   */
  _onSelectForward(event) {
    // 新しいシーンを追加
    this.refs.nav.push(event.route);
  }

  /**
   * 戻るを選択された際のハンドラーです。
   */
  _onSelectBack(event) {
    // シーンの末尾を削除
    this.refs.nav.pop();
  }
}
