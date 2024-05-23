import { Box, Flex, SkipNavContent, SkipNavLink } from '@chakra-ui/react';
import { Head } from '@inertiajs/react';

import { PublicFooter } from './PublicFooter';
import { PublicNav } from './PublicNav';

export const PublicLayout = ({
  title,
  children,
  disableNav = false,
  ...rest
}) => {
  return (
    <>
      <Head title={title ?? ''} />
      <SkipNavLink id="main-skip-nav">Skip to content</SkipNavLink>
      {!disableNav ? <PublicNav /> : <Box />}
      <Flex as="main" flexDirection="column" h="full" w="100vw" {...rest}>
        <SkipNavContent id="main-skip-nav" />
        {children}
      </Flex>
      {!disableNav && <PublicFooter />}
    </>
  );
};
