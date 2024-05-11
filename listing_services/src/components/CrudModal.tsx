import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Stack, Flex } from '@mantine/core';
import { InputLabel, TextField } from '@mui/material';

export default function CrudModal() {
    const [opened, { open, close }] = useDisclosure(false);
    
    const handlesave = () => {
        console.log('save')
        close();
    }

  return (
    <>
          <Modal
              opened={opened} onClose={close} title="Authentication">
            <Stack gap={20}>
              <Stack>
                <InputLabel>Item Title</InputLabel>
                <TextField></TextField>
                <InputLabel>Item Description</InputLabel>
                <TextField></TextField>
                <InputLabel>Item Price</InputLabel>
                    <TextField></TextField>
              </Stack>
              <Flex w={'100%'} justify={"space-between"}>
                      <Button
                          onClick={close}
                          variant='outline' color="red"> Cancel</Button>
                      <Button
                          onClick={handlesave}
                      
                      >Save</Button>
                  </Flex>
            </Stack>
              
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}