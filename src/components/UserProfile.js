import React from 'react';
import ReposContainer from '../containers/repos.container';
import ProfileContainer from '../containers/profile.container';

export default class UserProfile extends React.Component{
  render() {
    return (
      <main className="container">
      <ProfileContainer loginId={this.props.match.params.username} profileInfo={{}}/>
      <ReposContainer loginId={this.props.match.params.username} repos={[]}/>
      </main>
    )
  }
}

