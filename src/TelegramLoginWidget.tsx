import React, { useEffect, useRef } from 'react';

export interface TelegramUser {
  id: number;
  first_name: string;
  username: string;
  photo_url: string;
  auth_date: number;
  hash: string;
}

declare global {
  interface Window {
      TelegramLoginWidget: {
          dataOnauth: (user: TelegramUser) => void;
      };
  }
}


const TelegramLoginWidget: React.FC<any> = ({ }) => {
  const telegramWrapperRef = useRef<HTMLDivElement>(null);

  const onTelegramAuth = (user: TelegramUser): void => {
    console.log('user----------------------------', user);
  };
  useEffect(() => {
    window.TelegramLoginWidget = {
      dataOnauth: (user: any) => { onTelegramAuth(user); }
    };
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'such_test_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'TelegramLoginWidget.dataOnauth(user)');
    telegramWrapperRef?.current?.appendChild(script);

    return () => {
      telegramWrapperRef.current?.removeChild(script);
    };
  }, []);


  return (
    <div ref={telegramWrapperRef}></div>
  );
};

const onTelegramAuth = (user: any): void => {
  console.log('user----------------------------', user);
};

export default TelegramLoginWidget;
