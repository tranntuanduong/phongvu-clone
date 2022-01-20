import RightContact from '@components/Contact/RightContact';
import PopupAdvertise from '@components/PopupAdvertise';
import CartContextProvider from 'contexts/CartContext';
import PageContextProvider, { PageContext } from 'contexts/PageContext';
import useOnClickOutside from 'hooks/useOnclickOutside';
import dynamic from 'next/dynamic';
import { ReactNode, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DynamicHeaderWithNoSSR = dynamic(() => import('@components/Header'), { ssr: false });

const DynamicTopContactWithNoSSR = dynamic(() => import('@components/Contact/TopContact'), {
  ssr: false,
});

const DynamicFooterWithNoSSR = dynamic(() => import('@components/Footer'), { ssr: false });

const DynamicShadowWithNoSSR = dynamic(() => import('@components/Elements/Shadow'), { ssr: false });

interface PageProps {
  children?: ReactNode;
  home?: boolean;
}

function PageLayout(props: PageProps) {
  const { children } = props;
  const { t } = useTranslation();
  const { isHome } = useContext(PageContext);
  const [openPopupAdvertise, setOpenPopupAdvertise] = useState(true);
  const popupAdvertiseRef = useRef(null);

  const handleCloseDialogDetails = () => {
    setOpenPopupAdvertise(false);
  };

  useOnClickOutside(popupAdvertiseRef, handleCloseDialogDetails);

  return (
    <CartContextProvider>
      <PageContextProvider>
        <div>{t('hello-i18n')}</div>
        <div>vi tri quang cao...</div>
        <DynamicTopContactWithNoSSR />
        <DynamicHeaderWithNoSSR home={isHome} />
        {children}
        <DynamicFooterWithNoSSR />
        <DynamicShadowWithNoSSR />
      </PageContextProvider>

      {openPopupAdvertise && (
        <PopupAdvertise ref={popupAdvertiseRef} onClose={handleCloseDialogDetails} />
      )}
      <RightContact />
    </CartContextProvider>
  );
}

export default PageLayout;
