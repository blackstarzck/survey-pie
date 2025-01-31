import { selector } from 'recoil';
import textState from './atom';

const testWithComma = selector({
  key: 'testWithComma', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.join(', ');
  },
});

export default testWithComma;
