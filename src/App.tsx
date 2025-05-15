import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import {
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from '@mui/material'
import theme from './theme'
import './App.css'
import Form from './components/form'
import { useStateHandler } from './hooks/useStateHandler'
import { useStateHandlerObject } from './hooks/useStateHandlerObject'
import { useReducerHandler } from './hooks/useReducerHandler'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} sx={{ borderBottom: '1px solid #e5e7eb', width: '100vw', left: 0 }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 3 }, maxWidth: '1200px', width: '100%', mx: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} />
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="navigation tabs"
            textColor="primary"
            indicatorColor="primary"
            sx={{ minHeight: 64 }}
          >
            <Tab label="useState" />
            <Tab label="useReducer" />
            <Tab label="useStateObject" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: '80px', minHeight: '100vh', background: theme.palette.background.default }}>
        <Container sx={{ mt: 2 }}>
          <TabPanel value={tabValue} index={0}>
            <Form title="useState" hook={useStateHandler()} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Form title="useReducer" hook={useReducerHandler()} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Form title="useStateObject" hook={useStateHandlerObject()} />
          </TabPanel>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App;
