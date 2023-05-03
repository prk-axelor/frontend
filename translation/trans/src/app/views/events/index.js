import Typography from "@mui/material/Typography";

import { useTranslation } from "../../services/translate";

export function Events() {
  const { t } = useTranslation();
  return (
    <>
      <Typography>{t("Events")}</Typography>
    </>
  );
}

export default Events;
