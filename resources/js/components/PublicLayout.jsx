import { Flex, SkipNavContent, SkipNavLink } from '@chakra-ui/react';
import { Head } from '@inertiajs/react';

import { PublicFooter } from './PublicFooter';
import { PublicNav } from './PublicNav';

export const PublicLayout = ({ title, children, ...rest }) => {
  return (
    <>
      <Head title={title ?? ''} />
      <SkipNavLink id="main-skip-nav">Skip to content</SkipNavLink>
      <PublicNav />
      <Flex as="main" flexDirection="column" h="full" {...rest}>
        <SkipNavContent id="main-skip-nav" />
        {children}
      </Flex>
      <PublicFooter />
    </>
  );
};
