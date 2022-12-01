import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';

import { Statistics } from './Statistics/Statistics';
import statistics from './Statistics/data.json';

import { ProfileFriends } from './FriendList/FriendList'
import friends from './FriendList/friends.json';


import { ProfileTransactionHistory } from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json';

const { username, tag, location, avatar, stats, } = user;
export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />;
      <Statistics title='Upload stats' stats={statistics} />;
      <ProfileFriends friends={friends} />;
      <ProfileTransactionHistory items={transactions} />;
    </Container>
  );
};




