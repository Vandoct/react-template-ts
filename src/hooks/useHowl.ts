import { Howl } from 'howler';
import { useEffect, useState } from 'react';

type TUseHowl = Howl | null;
type TNullableString = string | undefined;

export const useHowl = (url: TNullableString): TUseHowl => {
  const [howl, setHowl] = useState<TUseHowl>(null);

  useEffect(() => {
    if (!url) return;

    setHowl(
      new Howl({
        src: url,
        html5: true,
        preload: 'metadata',
      })
    );
  }, [url]);

  return howl;
};
