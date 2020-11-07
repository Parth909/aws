import Layout from "../../components/Layout";
import withAdmin from "../withAdmin";

const Admin = ({ user, token }) => {
  return (
    <Layout>
      {JSON.stringify(user)}
      {JSON.stringify(token)}
    </Layout>
  );
};

export default withAdmin(Admin);
