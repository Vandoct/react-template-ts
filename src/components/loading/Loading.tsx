import { FC, ReactElement } from 'react';
import { LoadingContainer, LoadingWrapper } from './styled';

const Loading: FC = (): ReactElement => (
  <LoadingWrapper>
    <LoadingContainer>
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </LoadingContainer>
  </LoadingWrapper>
);

export default Loading;
