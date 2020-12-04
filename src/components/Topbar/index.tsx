import React from "react";
import { connect } from "react-redux";

type TopbarProps = {
  user?: any;
};

const Topbar = (props: TopbarProps) => (
  <header className="page-topbar">
    <p>This is top header</p>
  </header>
);

const mapState = (state: any) => ({ user: state.user });

export default connect(mapState, null)(Topbar);
