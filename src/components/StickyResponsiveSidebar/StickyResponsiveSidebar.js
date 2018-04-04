import React, {Component} from 'react';
import Sidebar from 'templates/components/Sidebar';

class StickyResponsiveSidebar extends Component<Props, State> {
  _openNavMenu = () => {
    this.setState({open: !this.state.open});
  };

  _closeNavMenu = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <Sidebar closeParentMenu={this._closeNavMenu} {...this.props} />
      </div>
    );
  }
}

export default StickyResponsiveSidebar;
