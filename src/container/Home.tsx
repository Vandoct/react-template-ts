import SearchIcon from 'assets/icon/search.svg';
import Header from 'components/header/styled';
import NowPlaying from 'components/nowplaying/NowPlaying';
import Player from 'components/player/Player';
import ListRadio from 'components/radio/ListRadio';
import SearchBar from 'components/search/styled';
import Sidebar from 'components/sidebar/Sidebar';
import { theme } from 'components/theme';
import {
  CategoryWrapper,
  Content,
  ContentContainer,
  ContentWrapper,
} from 'components/wrapper/styled';
import { FC, ReactElement, useState } from 'react';
import ReactHowler from 'react-howler';
import { radios } from 'utils/dummy';
import { generateImagePlaceholder } from 'utils/generator';

const Home: FC = (): ReactElement => {
  const [favorite, setFavorite] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Sidebar>
        <NowPlaying
          image={generateImagePlaceholder(220, 220)}
          title="Radio Title"
          currentSong="Current Song"
        />
        <Player
          spectrum
          color={theme.text}
          isFavorite={favorite}
          isPlaying={playing}
          onFavorite={() => setFavorite((prevState) => !prevState)}
          onPlay={() => setPlaying((prevState) => !prevState)}
        />
      </Sidebar>
      <ContentWrapper>
        <ContentContainer>
          <Header>
            <SearchBar
              size="large"
              placeholder="Search for radio channel"
              prefix={<img src={SearchIcon} alt="" />}
              onChange={(e) => console.log(e.target.value)}
            />
            <img
              src={generateImagePlaceholder(60, 60)}
              alt="a"
              style={{ borderRadius: '100%' }}
            />
          </Header>
          <Content>
            {radios.map((radio, index) => (
              <CategoryWrapper key={index}>
                <h1>{radio.category}</h1>
                <ListRadio radios={radio.channels} />
              </CategoryWrapper>
            ))}
          </Content>
          {playing && (
            <ReactHowler
              src="https://wow4.mahakaradiointegra.com:1936/web_genfm/genfm/playlist.m3u8"
              playing={playing}
              html5
            />
          )}
        </ContentContainer>
      </ContentWrapper>
    </>
  );
};

export default Home;
