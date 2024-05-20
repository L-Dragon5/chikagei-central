import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { router } from '@inertiajs/react';
import MDEditor from '@uiw/react-md-editor';
import { isEmpty } from 'lodash';
import { Controller, useForm } from 'react-hook-form';

export const ChikageiForm = ({ chikagei = {}, onClose, ...rest }) => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      name: chikagei?.name ?? '',
      jp_name: chikagei?.jp_name ?? '',
      notes: chikagei?.notes ?? '',
      examples: chikagei?.examples ?? '',
      url_alias: chikagei?.url_alias ?? '',
    },
  });

  const toast = useToast();

  const onSubmit = (data) => {
    if (isEmpty(chikagei)) {
      router.post('/chikagei', data, {
        onSuccess: () => {
          toast({
            title: 'Successfully created chikagei',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          reset();
          onClose();
        },
        onError: (postErrors) => {
          toast({
            title: 'Error creating chikagei',
            description: Object.values(postErrors)[0],
            status: 'error',
            duration: 4000,
            isClosable: true,
          });
        },
      });
    } else {
      router.put(`/chikagei/${chikagei.id}`, data, {
        onSuccess: () => {
          toast({
            title: 'Successfully updated chikagei',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          onClose();
        },
        onError: (putErrors) => {
          toast({
            title: 'Error updating chikagei',
            description: Object.values(putErrors)[0],
            status: 'error',
            duration: 4000,
            isClosable: true,
          });
        },
      });
    }
  };

  const handleDelete = (e) => {
    router.delete(`/chikagei/${chikagei.id}`, {
      onSuccess: () => {
        toast({
          title: 'Successfully deleted chikagei',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        onClose();
      },
      onError: (deleteErrors) => {
        toast({
          title: 'Error deleting chikagei',
          description: Object.values(deleteErrors)[0],
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <Drawer size="xl" onClose={onClose} {...rest}>
      <DrawerOverlay />
      <DrawerContent onSubmit={onSubmit}>
        <DrawerCloseButton />
        <DrawerHeader>
          {isEmpty(chikagei) ? 'Add' : 'Edit'} Chikagei
        </DrawerHeader>
        <DrawerBody>
          <Stack direction="column" spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>English Name</FormLabel>
              <Input {...register('name', { required: true })} />
              <FormErrorMessage>{errors?.name}</FormErrorMessage>
            </FormControl>

            <FormControl id="jp_name">
              <FormLabel>Japanese Name</FormLabel>
              <Input {...register('jp_name')} />
              <FormErrorMessage>{errors?.jp_name}</FormErrorMessage>
            </FormControl>

            <FormControl id="notes">
              <FormLabel>Notes</FormLabel>
              <Controller
                name="notes"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MDEditor
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    textareaProps={{
                      placeholder: 'Please enter any notes',
                    }}
                    highlightEnable={false}
                  />
                )}
              />
              <FormErrorMessage>{errors?.notes}</FormErrorMessage>
            </FormControl>

            <FormControl id="examples">
              <FormLabel>Examples</FormLabel>
              <Controller
                name="examples"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MDEditor
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    textareaProps={{
                      placeholder: 'Please enter any examples',
                    }}
                    highlightEnable={false}
                  />
                )}
              />
              <FormErrorMessage>{errors?.examples}</FormErrorMessage>
            </FormControl>

            {!isEmpty(chikagei) ? (
              <FormControl id="url_alias">
                <FormLabel>URL Alias</FormLabel>
                <Input {...register('url_alias')} />
                <FormErrorMessage>{errors?.url_alias}</FormErrorMessage>
              </FormControl>
            ) : null}
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <HStack w="full">
            {!isEmpty(chikagei) ? (
              <Button
                colorScheme="red"
                onClick={handleDelete}
                leftIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            ) : null}
            <Spacer />
            <ButtonGroup>
              <Button variant="outline" colorScheme="gray" onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="green"
                onClick={handleSubmit(onSubmit)}
                isLoading={isLoading}
              >
                Save
              </Button>
            </ButtonGroup>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
