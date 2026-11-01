import { apps, AppItem } from "../../data/apps";
import { Grid, AppTile, AppTileIcon, AppTileLabel } from "./AppGrid.styles";

export default function AppGrid({ onOpen }: { onOpen: (app: AppItem) => void }) {
  return (
    <Grid>
      {apps.map((app) => (
        <AppTile
          key={app.id}
          whileTap={{ scale: 0.9 }}
          onClick={() => onOpen(app)}
        >
          <AppTileIcon src={app.icon} alt={app.label} />
          <AppTileLabel>{app.label}</AppTileLabel>
        </AppTile>
      ))}
    </Grid>
  );
}
