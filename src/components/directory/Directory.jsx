import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import {selectDirectory} from '../../redux/directory/directory';
import { createStructuredSelector } from 'reselect';
export class Directory extends Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} subtitle="SHOP NOW" {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectory
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
