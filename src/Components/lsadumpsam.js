export default ({ data }) => {
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
    <table>
      <tr>
        <th>Username</th>
        <th>NTLM</th>
      </tr>
      {listedUsernames}
    </table>
  );
};
