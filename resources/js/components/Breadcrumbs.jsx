import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';

export const Breadcrumbs = ({ breadcrumbData = [] }) => {
  return (
    <Breadcrumb
      bgColor={useColorModeValue('gray.200', 'gray.500')}
      px={6}
      py={2}
      spacing={2}
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={InertiaLink} href="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {breadcrumbData.map((b) => (
        <BreadcrumbItem
          key={`breadcrumb-${b.name}`}
          isCurrentPage={b?.isCurrentPage}
          fontWeight={b?.isCurrentPage ? '500' : '400'}
        >
          <BreadcrumbLink as={InertiaLink} href={b.href}>
            {b.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
