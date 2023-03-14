import { ColorRing } from 'react-loader-spinner';
import { Background } from './Loader.styled';

export const Loader = () => {
  return (
    <Background>
      <ColorRing
        height="75"
        width="75"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          position: 'relative',
          left: '50%',
          transform: 'translate(-50%)',
        }}
        wrapperClass="blocks-wrapper"
        colors={['#24045a', '#600fe2', '#945eeb', '#c2abe9', '#f1f1f1']}
      />
    </Background>
  );
};