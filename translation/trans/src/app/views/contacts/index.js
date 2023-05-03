import Typography from "@mui/material/Typography";

import { useTranslation } from "../../services/translate";

export function Contacts() {
  const { t } = useTranslation();
  return (
    <>
      <Typography>{t("Contacts")}</Typography>
    </>
  );
}

export default Contacts;
