import { useState } from "react";

import "./App.css";
function App() {
  const [data, setData] = useState("Copy/paste mimikatz output here");
  let usernames = data.split("RID  :");
  let listedUsernames = usernames
    .filter((user) => user.split("\n")[0])
    .map(
      (user) =>
        user.split("User :")[1] && (
          <tr>
            <td>{user.split("User :")[1].split("\n")[0]}</td>
            <td>
              {user.split("Hash NTLM:")[1]
                ? user.split("Hash NTLM:")[1].split("\n")[0]
                : "-"}
            </td>
          </tr>
        )
    );
  return (
    <div>
      MimiKatz
      <table>
        <tr>
          <th>Username</th>
          <th>NTLM</th>
        </tr>
        {listedUsernames}
      </table>
      <textarea
        rows="20"
        cols="100"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
    </div>
  );
}

export default App;
