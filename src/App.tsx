import { Box, Card, Paper, Stack, Typography } from '@mui/material';
import { UiButton } from './components/ui/elements/UiButton';
import { useState } from 'react';
import { UiCard } from './components/ui/elements/UiCard';
import { UiCalendarCard } from './features/UiCalendarCard';

function App() {
  const [count, setCount] = useState(0);
  const hundleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const DATA = [
    { date: '01' },
    { date: '02' },
    { date: '03' },
    { date: '04' },
    { date: '05' },
    { date: '06' },
    { date: '07' },
  ];
  return (
    <>
      <Box sx={{ width: '100%', margin: '10px' }}>
        <Stack spacing={0.8} direction="row">
          {DATA.map((d) => (
            <UiCalendarCard color="BLUE" item={d}>
              カレンダー
            </UiCalendarCard>
          ))}
        </Stack>
        <Stack spacing={0.8} direction="row" sx={{ marginTop: '13px' }}>
          {DATA.map((d) => (
            <UiCalendarCard color="PURPLE" item={d}>
              カレンダー
            </UiCalendarCard>
          ))}
        </Stack>
        <Stack spacing={0.8} direction="row" sx={{ marginTop: '13px' }}>
          {DATA.map((d) => (
            <UiCalendarCard color="BLUE" item={d}>
              カレンダー
            </UiCalendarCard>
          ))}
        </Stack>
        <Stack spacing={0.8} direction="row" sx={{ marginTop: '13px' }}>
          {DATA.map((d) => (
            <UiCalendarCard color="BLUE" item={d}>
              カレンダー
            </UiCalendarCard>
          ))}
        </Stack>
        <Stack spacing={0.8} direction="row" sx={{ marginTop: '13px' }}>
          {DATA.map((d) => (
            <UiCalendarCard color="BLUE" item={d}>
              カレンダー
            </UiCalendarCard>
          ))}
        </Stack>
        <UiCard variant="calendar" color="PURPLE">
          カスタムカード
        </UiCard>
        <Card variant="calendar" elevation={3}>
          カード内容
        </Card>
        <Card variant="outlined">カード内容</Card>
        <Card variant="elevation" elevation={3}>
          カード内容
        </Card>
        <Paper variant="calendar" color="PURPLE">
          カレンダー内容
        </Paper>
      </Box>
      {count}
      <UiButton color="GREEN" onClick={hundleClick}>
        追加
      </UiButton>
      <Typography variant="h1">Helloh1</Typography>
      <Typography variant="h1Bold">Helloh1Bold</Typography>
      <Typography variant="h2">Helloh2</Typography>
      <Typography variant="h2Bold">Helloh2Bold</Typography>
      <Typography variant="h3">Helloh3</Typography>
      <Typography variant="h3Bold">Helloh3Bold</Typography>
      <Typography variant="h4">Helloh4</Typography>
      <Typography variant="h4Bold">Helloh4Bold</Typography>
      <Typography variant="h5">Helloh5</Typography>
      <Typography variant="bodyLarge">HellobodyLarge</Typography>
      <Typography variant="bodyLargeBold">HellobodyLargeBold</Typography>
      <Typography variant="bodyMedium">HellobodyMedium</Typography>
      <Typography variant="bodyMediumBold">HellobodyMediumBold</Typography>
      <Typography variant="bodySmall">HellobodySmall</Typography>
      <Typography variant="bodySmallBold">HellobodySmallBold</Typography>
    </>
  );
}

export default App;
