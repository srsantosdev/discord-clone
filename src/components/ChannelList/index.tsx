import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de text</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="league-of-legends" />
    </Container>
  );
};

export default ChannelList;
