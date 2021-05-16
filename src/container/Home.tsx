import Modal from 'antd/lib/modal/Modal';
import SearchIcon from 'assets/icon/search.svg';
import Account from 'components/account/Account';
import Header from 'components/header/styled';
import Loading from 'components/loading/Loading';
import NowPlaying from 'components/nowplaying/NowPlaying';
import Player from 'components/player/Player';
import ListRadio from 'components/radio/ListRadio';
import SearchBar from 'components/search/SearchBar';
import Sidebar from 'components/sidebar/Sidebar';
import { theme } from 'components/theme';
import { showNotification } from 'components/utils/notification';
import {
  CategoryWrapper,
  Content,
  ContentContainer,
  ContentWrapper,
} from 'components/wrapper/styled';
import { HOME, LOGIN, REGISTER } from 'constants/webRoute';
import { useDebouncedEffect } from 'hooks/useDebouncedEffect';
import { useHowl } from 'hooks/useHowl';
import { useUpdateEffect } from 'hooks/useUpdateEffects';
import React, {
  FC,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory, useParams } from 'react-router-dom';
import { clearError } from 'redux/common/fetcher';
import { IReduxCommonState } from 'redux/common/types';
import { getRadioDetail, getRadioList, reportRadio } from 'redux/radio/fetcher';
import {
  ICategoryRadio,
  IRadio,
  IReduxRadioState,
  TRadioNullable,
} from 'redux/radio/types';
import { AppDispatch, ApplicationState } from 'redux/store';
import { isEmptyArray } from 'utils/helper';
import Login from './Login';

interface HomeParams {
  slug: string;
}

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: Record<string, unknown>;
}

const Home: FC = (): ReactElement => {
  const [favorite, setFavorite] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<TRadioNullable>(null);
  const [suggestions, setSuggestions] = useState<IRadio[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { slug } = useParams<HomeParams>();
  const { radio, radios } = useSelector<ApplicationState, IReduxRadioState>(
    (state) => state.radio
  );
  const { user, error } = useSelector<ApplicationState, IReduxCommonState>(
    (state) => state.common
  );
  const howl = useHowl(selected?.url);
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  useLayoutEffect(() => {
    if (slug) {
      setShow(true);
    }
  }, [slug]);

  useLayoutEffect(() => {
    if (history.location.pathname === LOGIN) setIsModalVisible(true);
  }, [history]);

  useUpdateEffect(() => {
    if (!radio) {
      setShow(false);
      history.replace('/');
      return;
    }

    setSelected(radio);
  }, [radio]);

  useUpdateEffect(() => {
    if (user && isModalVisible) hideModal();
  }, [user]);

  useUpdateEffect(() => {
    if (error) {
      showNotification({
        type: 'error',
        title: 'Failed to sign in',
        message: error,
      });
      dispatch(clearError());
    }
  }, [error]);

  useEffect(() => {
    if (isEmptyArray(radios)) {
      dispatch(getRadioList());
    }
  }, [dispatch, radios]);

  useEffect(() => {
    if (!selected && slug && !isEmptyArray(radios)) {
      dispatch(getRadioDetail(slug));
    }
  }, [dispatch, radios, selected, slug]);

  useEffect(() => {
    if (!howl) return;

    if (howl.playing()) {
      howl.unload();
      return;
    }

    if (playing) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      howl.on('loaderror', handleRadioError);
      howl.play();
    }
  }, [howl, playing]);

  const filterRadio = (items: ICategoryRadio[]): IRadio[] => {
    return items
      .flatMap((a) => a.radios.map((b) => b))
      .filter((c) => c.title.toLowerCase().includes(query));
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleRadioClick = (data: IRadio) => {
    if (!isEmptyArray(suggestions)) {
      setSuggestions([]);
    }

    setQuery('');
    setPlaying(false);
    setSelected(data);
    history.push(data.id);
  };

  const handleFavoriteToggle = () => {
    setFavorite((prevState) => !prevState);
  };

  const handlePlayToggle = () => {
    setPlaying((prevState) => !prevState);
  };

  const handleReportRadio = () => {
    if (!selected) return;
    dispatch(reportRadio(selected.id))
      .then(() => {
        showNotification({
          type: 'success',
          title: 'Error reported',
          message: 'Thank you for reporting.',
        });
      })
      .catch(() => {
        showNotification({
          type: 'error',
          title: 'Failed to report',
          message:
            'An error occurred when reporting radio, please try again later.',
        });
      });
  };

  const handleRadioError = () => {
    setPlaying(false);
    showNotification({
      type: 'error',
      title: 'Failed to play radio',
      message:
        'An error occurred while playing the radio, please try again later or try to report it.',
    });
  };

  const handleSearchRadio = () => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const filteredRadios = filterRadio(radios);
    setSuggestions(filteredRadios);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);

    const state = history.location.state as Location;
    const path = state?.pathname || HOME;

    history.replace(path);
  };

  const handleLoginClick = () => {
    history.push(LOGIN, {
      ...history.location,
    });
    showModal();
  };

  const handleRegisterClick = () => {
    history.push(REGISTER, {
      ...history.location,
    });
    showModal();
  };

  const handleLogoutClick = () => {
    console.log('logout');
  };

  useDebouncedEffect(handleSearchRadio, 500, query);

  if (!selected && !radios.length) {
    return <Loading />;
  }

  return (
    <>
      {history.location.pathname === LOGIN && (
        <Route
          path={LOGIN}
          render={() => (
            <Modal footer={null} visible={isModalVisible} onCancel={hideModal}>
              <Login />
            </Modal>
          )}
        />
      )}

      <Sidebar isShow={show}>
        <NowPlaying
          image={selected?.image || ''}
          title={selected?.title || ''}
          currentSong="Current Song"
        />
        <Player
          spectrum={playing}
          color={theme.text}
          isFavorite={favorite}
          isPlaying={playing}
          onFavorite={handleFavoriteToggle}
          onPlay={handlePlayToggle}
          onReport={handleReportRadio}
        />
      </Sidebar>
      <ContentWrapper isShow={show}>
        <ContentContainer>
          <Header>
            <SearchBar
              size="large"
              placeholder="Search for radio channel"
              prefix={<img src={SearchIcon} alt="" />}
              value={query}
              onChange={handleQueryChange}
              suggestions={suggestions}
              onSuggestionClick={handleRadioClick}
            />
            <Account
              name={user ? user.name : null}
              isLoggedIn={!!user}
              onLogin={handleLoginClick}
              onRegister={handleRegisterClick}
              onLogout={handleLogoutClick}
            />
          </Header>
          <Content>
            {radios.map((item, index) => (
              <CategoryWrapper key={index}>
                <h1>{item.category}</h1>
                <ListRadio radios={item.radios} onClick={handleRadioClick} />
              </CategoryWrapper>
            ))}
          </Content>
        </ContentContainer>
      </ContentWrapper>
    </>
  );
};

export default Home;
