"use client";

import { ActionIcon, Box, Group, Stack } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import classes from "./RequestTable.module.css";
import { IconTrash } from "@tabler/icons-react";
import { deleteEvent } from "../../httpRequests";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllEvents, create } from "../../httpRequests";



export default function RequestTable({ records, changeEvent }) {
  const { binKey } = useParams()

  useEffect(() => {
    let intervalId;
  
    async function fetchData() {
      try {
        const events = await getAllEvents(binKey);
        changeEvent(events);
      } catch (error) {
        console.error("Error with fetching data:", error);
      }
    }
  
    fetchData(); // Immediately fetch data on binKey change
  
    intervalId = setInterval(() => {
      fetchData();
    }, 500);
  
    return () => clearInterval(intervalId); // Clean up the interval on component unmount or binKey change
  }, [binKey]);

  return (
    <DataTable
      minHeight={150}
      noHeader
      withTableBorder
      highlightOnHover
      verticalSpacing="lg"
      horizontalSpacing="md"
      fz="md"
      columns={[
        {
          accessor: "timestamp",
          cellsStyle: () => ({ fontStyle: "italic", color: "gray" }),
        },
        {
          accessor: "method",
          render: ({ method }) => {
            let color;

            switch (method) {
              case "GET":
                color = "green";
                break;
              case "DELETE":
                color = "red";
                break;
              case "PUT":
                color = "yellow";
                break;
              default:
                color = "blue"; // Default color for other methods like POST, etc.
            }

            return <Box c={color}>{method}</Box>;
          },
        },
        {
          accessor: "path",
          cellsStyle: () => ({ fontWeight: "bold" }),
        },
        {
          accessor: "actions",
          textAlign: "right",
          render: (record) => (
            <ActionIcon
              size="sm"
              variant="subtle"
              color="red"
              onClick={async (e) => {
                e.stopPropagation();
                const res = await deleteEvent(record.id); // add pop-up message for delete confirmation
                console.log(res);
                changeEvent((events) =>
                  events.filter((event) => event.id !== record.id)
                );
              }}
            >
              <IconTrash size={16} />
            </ActionIcon>
          ),
        },
      ]}
      records={records}
      noRecordsText="No requests to show"
      rowExpansion={{
        allowMultiple: true,
        content: ({ record }) => (
          <Stack className={classes.details} p="xs" gap={6}>
            <Group gap={6}>
              <div className={classes.label}>
                Headers:
                <pre>{JSON.stringify(record.headers, undefined, 2)}</pre>
              </div>
            </Group>
            <Group gap={6}>
              <div className={classes.label}>
                {record.body ? <div>Body:</div> : <div></div>}
                <pre>{JSON.stringify(record.body, undefined, 2)}</pre>
              </div>
            </Group>
          </Stack>
        ),
      }}
    />
  );
}
