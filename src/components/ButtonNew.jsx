import { Button, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { create } from "../../httpRequests"
import { useNavigate } from "react-router-dom";

export function ButtonNew( { setEvents } ) {
  const navigate = useNavigate();

  const handleCreate = () => {
    create().then((data) => {
      setEvents(null);
      navigate(`/${data.bin_key}`);
    }).catch((error) => {
      console.error("Error creating bin:", error);
    });
  };

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
      onClick={handleCreate}
    >
      Create New Bin
    </Button>
  );
}
