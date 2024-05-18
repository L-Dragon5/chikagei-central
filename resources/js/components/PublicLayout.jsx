import { Flex, SkipNavContent, SkipNavLink } from '@chakra-ui/react';

import { PublicFooter } from './PublicFooter';
import { PublicNav } from './PublicNav';

export const PublicLayout = ({ children }) => {
  return (
    <>
      <SkipNavLink id="main-skip-nav">Skip to content</SkipNavLink>
      <PublicNav />
      <Flex as="main" flexDirection="column" h="full">
        <SkipNavContent id="main-skip-nav" />
        {children}
      </Flex>
      <PublicFooter />
    </>
  );
};
