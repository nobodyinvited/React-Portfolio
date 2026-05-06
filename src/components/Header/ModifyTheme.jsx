import { useTheme } from "../../hooks/useTheme";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "../Hero/Button";

export default function ModifyTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      icon={
        theme === "light" ? <IconMoon stroke={2} /> : <IconSun stroke={2} />
      } onClick={toggleTheme}
    >
      Change theme
    </Button>
    // <button className="flex flex-row gap-2 border" onClick={toggleTheme}>
    //   <p>Change theme</p>
    //   {theme === "light" ? <IconMoon stroke={2} /> : <IconSun stroke={2} />}
    // </button>
  );
}
