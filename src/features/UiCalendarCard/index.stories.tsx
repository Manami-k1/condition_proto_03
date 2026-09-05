import type { Meta, StoryObj } from '@storybook/react-vite';

import { UiCalendarCard } from '.';
import { COLORS, type ColorName } from '../../components/styles/tokens/colors';

const COLOR_OPTIONS = Object.keys(COLORS) as ColorName[];

const meta = {
  title: 'features/UiCalendarCard',
  component: UiCalendarCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: COLOR_OPTIONS,
    },
  },
  args: {
    children: '今日の記録',
    item: {
      date: '01',
    },
  },
} satisfies Meta<typeof UiCalendarCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
