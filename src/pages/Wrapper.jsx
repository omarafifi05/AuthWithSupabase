import React   from "react";
import supabase from "../helper/SupabaseClient";
import { Navigate } from "react-router-dom";    


function Wrapper({ children }) {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };
    getSession();
  }, []);

    if (loading) {
      return <div>Loading...</div>;
    } else {
      if (authenticated) {
        return children;
      }
      return <Navigate to="/login" />;
    }
}
export default Wrapper;