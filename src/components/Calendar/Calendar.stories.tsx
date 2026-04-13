import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { DatePicker } from './DatePicker';
import { DateRangePicker } from './DateRangePicker';

/* ========================================
   Calendar (Inline) Stories
   ======================================== */
const calendarMeta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'range'],
    },
    display: {
      control: 'radio',
      options: ['inline', 'dropdown'],
    },
    size: {
      control: 'radio',
      options: ['L', 'M'],
    },
    months: {
      control: 'radio',
      options: [1, 2],
    },
    quickSelect: {
      control: 'boolean',
    },
    locale: {
      control: 'select',
      options: ['ru-RU', 'en-US', 'en-GB', 'de-DE'],
    },
    firstDayOfWeek: {
      control: 'radio',
      options: [0, 1],
    },
  },
};

export default calendarMeta;

type CalendarStory = StoryObj<typeof Calendar>;

/* ---- Inline Single ---- */
export const InlineSingle: CalendarStory = {
  name: 'Inline / Single Date',
  args: {
    type: 'single',
    display: 'inline',
    size: 'L',
    months: 1,
    locale: 'ru-RU',
    firstDayOfWeek: 1,
    quickSelect: false,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <Calendar {...args} value={date} onChange={setDate} />;
  },
};

/* ---- Inline Single with Quick Select ---- */
export const InlineSingleQuickSelect: CalendarStory = {
  name: 'Inline / Single + Quick Select',
  args: {
    type: 'single',
    display: 'inline',
    size: 'L',
    months: 1,
    locale: 'ru-RU',
    firstDayOfWeek: 1,
    quickSelect: true,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <Calendar {...args} value={date} onChange={setDate} />;
  },
};

/* ---- Inline Range ---- */
export const InlineRange: CalendarStory = {
  name: 'Inline / Range',
  args: {
    type: 'range',
    display: 'inline',
    size: 'L',
    months: 2,
    locale: 'ru-RU',
    firstDayOfWeek: 1,
    quickSelect: true,
  },
  render: (args) => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
      start: new Date(2026, 2, 10),
      end: new Date(2026, 2, 21),
    });
    return <Calendar {...args} range={range} onRangeChange={setRange} />;
  },
};

/* ---- Size M ---- */
export const SizeM: CalendarStory = {
  name: 'Size M',
  args: {
    type: 'single',
    display: 'inline',
    size: 'M',
    months: 1,
    locale: 'ru-RU',
    firstDayOfWeek: 1,
    quickSelect: false,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <Calendar {...args} value={date} onChange={setDate} />;
  },
};

/* ---- English Locale ---- */
export const EnglishLocale: CalendarStory = {
  name: 'English Locale (Sunday start)',
  args: {
    type: 'single',
    display: 'inline',
    size: 'L',
    months: 1,
    locale: 'en-US',
    firstDayOfWeek: 0,
    quickSelect: false,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <Calendar {...args} value={date} onChange={setDate} />;
  },
};

/* ---- With Disabled Dates ---- */
export const WithDisabledDates: CalendarStory = {
  name: 'With Disabled Dates',
  args: {
    type: 'single',
    display: 'inline',
    size: 'L',
    months: 1,
    locale: 'ru-RU',
    firstDayOfWeek: 1,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    const today = new Date();
    const disabledDates = [
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8),
    ];
    return (
      <Calendar
        {...args}
        value={date}
        onChange={setDate}
        disabledDates={disabledDates}
        minDate={new Date(today.getFullYear(), today.getMonth(), 1)}
        maxDate={new Date(today.getFullYear(), today.getMonth() + 2, 0)}
      />
    );
  },
};

/* ---- Dark Theme ---- */
export const DarkTheme: CalendarStory = {
  name: 'Dark Theme',
  args: {
    type: 'single',
    display: 'inline',
    size: 'L',
    months: 1,
    locale: 'ru-RU',
    firstDayOfWeek: 1,
    quickSelect: true,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <div data-theme="dark" style={{ background: '#1A1A24', padding: 32, borderRadius: 16 }}>
        <Calendar {...args} value={date} onChange={setDate} />
      </div>
    );
  },
};

/* ========================================
   DatePicker Stories
   ======================================== */
export const DatePickerDefault: StoryObj<typeof DatePicker> = {
  name: 'DatePicker / Default',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ minHeight: 500 }}>
        <DatePicker
          size="L"
          label="Дата рождения"
          value={date}
          onChange={setDate}
          hint="Выберите дату"
          showHint
        />
      </div>
    );
  },
};

export const DatePickerFilled: StoryObj<typeof DatePicker> = {
  name: 'DatePicker / Filled',
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date(2026, 2, 9));
    return (
      <div style={{ minHeight: 500 }}>
        <DatePicker
          size="L"
          label="Дата"
          value={date}
          onChange={setDate}
        />
      </div>
    );
  },
};

export const DatePickerError: StoryObj<typeof DatePicker> = {
  name: 'DatePicker / Error',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ minHeight: 500 }}>
        <DatePicker
          size="L"
          label="Дата"
          value={date}
          onChange={setDate}
          error
          hint="Обязательное поле"
          showHint
        />
      </div>
    );
  },
};

export const DatePickerDisabled: StoryObj<typeof DatePicker> = {
  name: 'DatePicker / Disabled',
  render: () => (
    <DatePicker
      size="L"
      label="Дата"
      value={new Date(2026, 2, 9)}
      disabled
    />
  ),
};

export const DatePickerSizeM: StoryObj<typeof DatePicker> = {
  name: 'DatePicker / Size M',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ minHeight: 450 }}>
        <DatePicker
          size="M"
          label="Дата"
          value={date}
          onChange={setDate}
          quickSelect
        />
      </div>
    );
  },
};

export const DatePickerWithQuickSelect: StoryObj<typeof DatePicker> = {
  name: 'DatePicker / Quick Select',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ minHeight: 500 }}>
        <DatePicker
          size="L"
          label="Дата"
          value={date}
          onChange={setDate}
          quickSelect
        />
      </div>
    );
  },
};

/* ========================================
   DateRangePicker Stories
   ======================================== */
export const DateRangePickerDefault: StoryObj<typeof DateRangePicker> = {
  name: 'DateRangePicker / Default',
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
      start: null,
      end: null,
    });
    return (
      <div style={{ minHeight: 550 }}>
        <DateRangePicker
          size="L"
          value={range}
          onChange={setRange}
          quickSelect
        />
      </div>
    );
  },
};

export const DateRangePickerFilled: StoryObj<typeof DateRangePicker> = {
  name: 'DateRangePicker / Filled',
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
      start: new Date(2026, 2, 10),
      end: new Date(2026, 2, 21),
    });
    return (
      <div style={{ minHeight: 550 }}>
        <DateRangePicker
          size="L"
          value={range}
          onChange={setRange}
          quickSelect
        />
      </div>
    );
  },
};

export const DateRangePickerSizeM: StoryObj<typeof DateRangePicker> = {
  name: 'DateRangePicker / Size M',
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
      start: null,
      end: null,
    });
    return (
      <div style={{ minHeight: 500 }}>
        <DateRangePicker
          size="M"
          value={range}
          onChange={setRange}
          quickSelect
        />
      </div>
    );
  },
};

/* ---- All States Showcase ---- */
export const AllStates: StoryObj = {
  name: 'All States Overview',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter', fontSize: 14, color: '#6E6E81' }}>Inline Calendar — Single</h3>
        <StatefulInline type="single" />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter', fontSize: 14, color: '#6E6E81' }}>Inline Calendar — Range (2 months)</h3>
        <StatefulInlineRange />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter', fontSize: 14, color: '#6E6E81' }}>DatePicker States</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <DatePicker size="L" label="Default" />
          <DatePicker size="L" label="Filled" value={new Date(2026, 2, 9)} />
          <DatePicker size="L" label="Error" error hint="Ошибка" showHint />
          <DatePicker size="L" label="Disabled" disabled value={new Date(2026, 2, 9)} />
        </div>
      </div>
    </div>
  ),
};

function StatefulInline({ type }: { type: 'single' | 'range' }) {
  const [date, setDate] = useState<Date | null>(new Date());
  return <Calendar type={type} display="inline" size="L" value={date} onChange={setDate} quickSelect />;
}

function StatefulInlineRange() {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: new Date(2026, 2, 10),
    end: new Date(2026, 2, 21),
  });
  return <Calendar type="range" display="inline" size="L" months={2} range={range} onRangeChange={setRange} quickSelect />;
}
