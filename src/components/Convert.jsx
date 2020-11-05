import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ text, languange }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translateRequest = async () => {
      try {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncedText,
              target: languange.value,
              key: API_KEY,
            },
          }
        );

        setTranslated(data.data.translations[0].translatedText);
      } catch (error) {
        console.log(error.messages);
      }
    };

    translateRequest();
  }, [debouncedText, languange]);

  return <div>{translated}</div>;
};

export default Convert;
