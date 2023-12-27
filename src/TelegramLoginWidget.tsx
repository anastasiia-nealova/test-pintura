import React, { useEffect, useRef } from 'react';

const TelegramLoginWidget: React.FC<any> = ({ }) => {
  const telegramWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-expect-error test
    window.TelegramLoginWidget = {
      callbackOnAuth: (user: any) => { onTelegramAuth(user); }
    };
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'test_bot_for_such');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'TelegramLoginWidget.callbackOnAuth(user)');
    script.async = true;
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
