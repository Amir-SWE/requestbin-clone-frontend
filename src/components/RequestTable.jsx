'use client';

import { ActionIcon, Box, Group, Stack} from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import classes from './RequestTable.module.css'
import { IconTrash } from '@tabler/icons-react';

export default function RequestTable({records}) {
  return (
    <DataTable
    minHeight={150}
    noHeader
    withTableBorder
    highlightOnHover
    verticalSpacing='lg'
    horizontalSpacing='md'
    fz='md'
    columns={[
        { 
            accessor: 'timestamp',
            cellsStyle: () => ({ fontStyle: 'italic', color: 'gray' }),
        }, 
        { 
            accessor: 'method',
            render: ({method}) => (
                <Box c={method === 'GET' ? 'green' : 'blue'}>
                    {method}
                </Box>
            )
        }, 
        { 
            accessor: 'path',
            cellsStyle: () => ({ fontWeight: 'bold' })
        },
        {
            accessor: 'actions',
            textAlign: 'right',
            render: () => (
                <ActionIcon
                size="sm"
                variant="subtle"
                color="red"
                onClick={(e) => {
                    e.stopPropagation()
                }}
                >
                    <IconTrash size={16} />
                </ActionIcon>
            )
        }
    ]}
    records={records}
    noRecordsText="No requests to show"
    rowExpansion={{
      allowMultiple: true,
      content: () => (
        <Stack className={classes.details} p="xs" gap={6}>
          <Group gap={6}>
            <div className={classes.label}>Details:</div>
          </Group>
          <Group gap={6}>
            <div className={classes.label}>Headers:</div>
          </Group>
        </Stack>
      ),
    }}
  />
  );
}