import React from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

interface CreateTopicPageProps extends RouteComponentProps {
  user: any;
}

const CreateTopicPage = (props: CreateTopicPageProps) => {
  return (
    <div className="create-topic-page">
      <h2>CreateTopicPage</h2>
    </div>
  );
};

const mapState = (state: any) => ({ user: state.user });

export default connect(mapState, null)(CreateTopicPage);
