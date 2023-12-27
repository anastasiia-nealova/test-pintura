import React, { useEffect, useRef } from 'react';

const TelegramLoginWidget: React.FC<any> = ({ }) => {
  const telegramWrapperRef = useRef<HTMLDivElement>(null);
  const onTelegramAuth = (user: any): void => {
    console.log('user----------------------------', user);
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'such_test_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
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



export default TelegramLoginWidget;
