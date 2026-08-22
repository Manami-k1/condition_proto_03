import { Stack, Typography } from '@mui/material';
import { UiButton } from './components/ui/elements/UiButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const hundleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
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
      <Typography variant="bodyLarge">HellobodyLarge</Typography>
      <Typography variant="bodyLargeBold">HellobodyLargeBold</Typography>
      <Typography variant="bodyMedium">HellobodyMedium</Typography>
      <Typography variant="bodyMediumBold">HellobodyMediumBold</Typography>
      <Typography variant="bodySmall">HellobodySmall</Typography>
      <Typography variant="bodySmallBold">HellobodySmallBold</Typography>
      <Stack spacing={2}>
        <UiButton color="ORANGE" fullWidth>
          追加
        </UiButton>
        <UiButton color="RED">追加</UiButton>
        <UiButton color="BLUE">追加</UiButton>
        <UiButton color="GRAY">追加</UiButton>
        <UiButton color="SKY">追加</UiButton>
        <UiButton color="TEAL">追加</UiButton>
        <UiButton color="LIME">追加</UiButton>
        <UiButton color="YELLOW">追加</UiButton>
        <UiButton color="PINK" disabled>
          追加
        </UiButton>
        <UiButton color="PURPLE" variant="contained">
          追加
        </UiButton>
        <UiButton color="INDIGO">追加</UiButton>
        <UiButton color="BROWN">追加</UiButton>
        <UiButton color="SLATE">追加</UiButton>
      </Stack>
    </>
  );
}

export default App;
