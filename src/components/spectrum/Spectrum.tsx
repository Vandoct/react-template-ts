import { FC, ReactElement } from 'react';
import SpectrumWrapper from './styled';

export interface ISpectrumProps {
  color?: string;
  isPlaying?: boolean;
}

const Spectrum: FC<ISpectrumProps> = ({
  color = '#FFFFFF',
  isPlaying = true,
}): ReactElement => (
  <SpectrumWrapper color={color} isPlaying={isPlaying ? 'running' : 'paused'}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </SpectrumWrapper>
);

export default Spectrum;
