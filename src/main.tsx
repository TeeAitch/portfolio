import App from './App.tsx'
import theme from '@themes/theme.ts';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'
import './index.css'

function Main() {
  return (
    <MantineProvider defaultColorScheme='dark' theme={{
      ...theme,
    }}>
      <StrictMode>
        <App />
      </StrictMode>
    </MantineProvider>
  )
}
createRoot(document.getElementById('root')!).render(
  <Main />
)
