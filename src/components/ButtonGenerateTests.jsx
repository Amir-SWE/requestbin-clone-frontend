import { Button, rem } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { testRequests } from "../../httpRequests";
import { useParams } from "react-router-dom";

export function ButtonGenerateTests( ) {
  const { binKey } = useParams();

  return (
    <Button
      variant="light"
      color="green"
      rightSection={
        <IconSend style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      }
      radius="xl"
      size="md"
      styles={{
        root: { paddingRight: rem(14), height: rem(48) },
        section: { marginLeft: rem(22) },
      }}
      onClick={() => {
        testRequests(binKey);
      }}
    >
      Generate Test Requests
    </Button>
  );
}
