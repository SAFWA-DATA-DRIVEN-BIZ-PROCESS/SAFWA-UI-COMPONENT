import { useForm } from "react-hook-form";
import {
  TextInput,
} from "../src/index";
import { Button, Group, Paper, Container, Stack } from "@mantine/core";
import { type Meta } from "@storybook/react";

export default {
  title: "Examples/AllComponents",
} satisfies Meta;

export const AllComponents = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      textInput: "",
    },
  });

  return (
    <div className="App">
      <Container size={1000}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form
            onSubmit={handleSubmit(
              (data) => console.log(data),
              (error) => console.log(error)
            )}
          >
            <Stack spacing="xl">
              
              <TextInput name="textInput" control={control} label="TextBox" />
              
              <TextInput
                name="textInput"
                control={control}
                placeholder="Your name"
                label="Full name"
                withAsterisk
              />
              <Group position="left" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
