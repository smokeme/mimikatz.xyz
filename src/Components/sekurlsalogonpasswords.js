export default ({ data }) => {
  let usernames = data.split("Username :");
  let listedUsernames = usernames
    .filter((user) => user.split("\n")[1])
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
      </tr>
    ));
  return (
    <table>
      <tr>
        <th>Username</th>
        <th>Domain</th>
        <th>Password</th>
        <th>NTLM</th>
      </tr>
      {listedUsernames}
    </table>
  );
};
