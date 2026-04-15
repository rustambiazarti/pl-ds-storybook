import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableTextContent,
  TableAvatarContent,
  TableChipsContent,
  TableActionsContent,
} from './Table';
import { Checkbox } from '../Checkbox/Checkbox';
import type { TableSize, SortDirection } from './Table';

const meta = {
  title: 'Data Display/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['L', 'M', 'S'] },
    dark: { control: 'boolean' },
    headerFill: { control: 'boolean' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ==========================================================================
   Sample data (matches Figma's 8-row sample table)
   ========================================================================== */

const sampleRows = [
  { id: 1, name: 'Alexander Petrov', email: 'alex.petrov@mail.com', event: 'Summer Music Festival', tags: ['VIP', 'Early Bird'], amount: 'AED 1,250.00', date: '12 Jan 2025' },
  { id: 2, name: 'Maria Ivanova', email: 'maria.iv@gmail.com', event: 'Tech Conference 2025', tags: ['General'], amount: 'AED 890.00', date: '15 Jan 2025' },
  { id: 3, name: 'James Wilson', email: 'j.wilson@corp.com', event: 'Art Exhibition Opening', tags: ['Press', 'VIP'], amount: 'AED 500.00', date: '18 Jan 2025' },
  { id: 4, name: 'Sarah Chen', email: 's.chen@email.com', event: 'Summer Music Festival', tags: ['Early Bird'], amount: 'AED 1,250.00', date: '20 Jan 2025' },
  { id: 5, name: 'Omar Hassan', email: 'omar.h@mail.ae', event: 'Food & Wine Expo', tags: ['VIP', 'Premium'], amount: 'AED 2,100.00', date: '22 Jan 2025' },
  { id: 6, name: 'Elena Rodriguez', email: 'e.rodriguez@co.uk', event: 'Tech Conference 2025', tags: ['Speaker'], amount: 'AED 0.00', date: '25 Jan 2025' },
  { id: 7, name: 'David Kim', email: 'd.kim@startup.io', event: 'Art Exhibition Opening', tags: ['General'], amount: 'AED 500.00', date: '28 Jan 2025' },
  { id: 8, name: 'Fatima Al-Rashid', email: 'fatima.r@biz.ae', event: 'Food & Wine Expo', tags: ['VIP'], amount: 'AED 2,100.00', date: '30 Jan 2025' },
];

/* ==========================================================================
   Full Sample Table renderer
   ========================================================================== */

const SampleTable: React.FC<{ size?: TableSize; dark?: boolean; headerFill?: boolean }> = ({
  size = 'M',
  dark = false,
  headerFill = true,
}) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [sort, setSort] = useState<{ col: string; dir: SortDirection }>({ col: '', dir: 'off' });

  const allSelected = selected.size === sampleRows.length;
  const someSelected = selected.size > 0 && !allSelected;

  const toggleAll = () => {
    if (allSelected) setSelected(new Set());
    else setSelected(new Set(sampleRows.map(r => r.id)));
  };

  const toggleRow = (id: number) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const cycleSort = (col: string) => {
    setSort(prev => {
      if (prev.col !== col) return { col, dir: 'asc' };
      if (prev.dir === 'asc') return { col, dir: 'desc' };
      return { col: '', dir: 'off' };
    });
  };

  const bg = dark ? '#0f0f15' : '#ffffff';

  return (
    <div style={{ background: bg, borderRadius: 16, overflow: 'hidden' }}>
      <Table size={size} dark={dark} headerFill={headerFill}>
        <TableHead>
          <TableRow>
            <TableHeaderCell checkbox width={52}>
              <Checkbox
                size="S"
                checked={allSelected}
                indeterminate={someSelected}
                onChange={toggleAll}
              />
            </TableHeaderCell>
            <TableHeaderCell sort={sort.col === 'name' ? sort.dir : 'off'} onSort={() => cycleSort('name')}>
              Name
            </TableHeaderCell>
            <TableHeaderCell sort={sort.col === 'event' ? sort.dir : 'off'} onSort={() => cycleSort('event')}>
              Event
            </TableHeaderCell>
            <TableHeaderCell>Tags</TableHeaderCell>
            <TableHeaderCell sort={sort.col === 'amount' ? sort.dir : 'off'} onSort={() => cycleSort('amount')}>
              Amount
            </TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleRows.map(row => (
            <TableRow key={row.id}>
              <TableCell width={52}>
                <span style={{ display: 'flex', justifyContent: 'center' }}>
                  <Checkbox size="S" checked={selected.has(row.id)} onChange={() => toggleRow(row.id)} />
                </span>
              </TableCell>
              <TableCell>
                <TableAvatarContent name={row.name} subtitle={row.email} />
              </TableCell>
              <TableCell>
                <TableTextContent title={row.event} subtitle={row.date} />
              </TableCell>
              <TableCell>
                <TableChipsContent chips={row.tags} />
              </TableCell>
              <TableCell>
                <TableTextContent title={row.amount} />
              </TableCell>
              <TableCell>
                <TableActionsContent
                  onCopy={() => {}}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

/* ==========================================================================
   Stories
   ========================================================================== */

export const Default: Story = {
  args: { size: 'M', headerFill: true },
  render: (args) => <SampleTable size={args.size} dark={args.dark} headerFill={args.headerFill} />,
};

export const SizeL: Story = {
  name: 'Size L',
  render: () => <SampleTable size="L" />,
};

export const SizeS: Story = {
  name: 'Size S',
  render: () => <SampleTable size="S" />,
};

export const DarkTheme: Story = {
  name: 'Dark Theme',
  render: () => <SampleTable dark />,
};

export const DarkThemeSizeL: Story = {
  name: 'Dark Theme / Size L',
  render: () => <SampleTable size="L" dark />,
};

export const DarkThemeSizeS: Story = {
  name: 'Dark Theme / Size S',
  render: () => <SampleTable size="S" dark />,
};

export const NoHeaderFill: Story = {
  name: 'No Header Fill',
  render: () => <SampleTable headerFill={false} />,
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div>
        <h3 style={{ fontFamily: 'var(--font-family-default)', fontSize: 14, color: '#6e6e81', marginBottom: 12 }}>Size L (64px rows)</h3>
        <SampleTable size="L" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-family-default)', fontSize: 14, color: '#6e6e81', marginBottom: 12 }}>Size M (52px rows)</h3>
        <SampleTable size="M" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-family-default)', fontSize: 14, color: '#6e6e81', marginBottom: 12 }}>Size S (44px rows)</h3>
        <SampleTable size="S" />
      </div>
    </div>
  ),
};

export const LightAndDark: Story = {
  name: 'Light & Dark',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div>
        <h3 style={{ fontFamily: 'var(--font-family-default)', fontSize: 14, color: '#6e6e81', marginBottom: 12 }}>Light Theme</h3>
        <SampleTable />
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-family-default)', fontSize: 14, color: '#6e6e81', marginBottom: 12 }}>Dark Theme</h3>
        <SampleTable dark />
      </div>
    </div>
  ),
};
