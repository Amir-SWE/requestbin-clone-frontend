import { Button, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export function ButtonNew() {
  return (
    <Button
      variant="light"
      color="#ffd09c"
      rightSection={
        <IconPlus style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      }
      radius="xl"
      size="md"
      styles={{
        root: { paddingRight: rem(14), height: rem(48) },
        section: { marginLeft: rem(22) },
      }}
      onClick={() => console.log("new")}
    >
      New
    </Button>
  );
}
