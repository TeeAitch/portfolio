import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import "@styles/contact/contact.css";
import { useForm, } from "@mantine/form"
import emailjs from 'emailjs-com';
import { useState } from 'react';

function Contact() {
  const [loading, setLoading] = useState(false);
  const lastSubmit = localStorage.getItem('lastSubmitTime');
  const now = Date.now();
  const SUBMIT_DOWN_TIME = 60000

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must be at least 2 characters long' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address'),
      message: (value) => (value.length < 10 ? 'Message must be at least 10 characters long' : null),
    },
  })

  const handleSubmit = (values: typeof form.values) => {

    if (lastSubmit && now - Number(lastSubmit) < SUBMIT_DOWN_TIME) {
      alert('Please wait before sending another message.');
      return;
    }

    setLoading(true);
    emailjs.send('service_lnrgijt', 'template_ecye9dx', values, '8F3utZm7PV2OuZCRl')
      .then(() => {
        alert('Message sent!');
        form.reset();
        localStorage.setItem('lastSubmitTime', now.toString());
      })
      .catch((error) => {
        alert('Failed to send message');
        console.error(error);
      })
      .finally(() => setLoading(false));
  };


  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Outfit, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
        Contact Me
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button disabled={loading} style={{ background: 'var(--secondary-color)' }} type="submit" size="md">
          Send message
        </Button>
      </Group>

    </form>
  )
}
export default Contact