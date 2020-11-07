const User = ({ user }) => {
  return <Layout>{JSON.stringify(user)}</Layout>;
};
// the returned things will be accessible as props
// USED FOR SSR - see HELP.md
User.getInitialProps = async (context) => {
  // with the help of getInitial.. we get access to context
  const token = getCookie("token", context.req);

  // as this is a protected route we need to send the header as well

  try {
    const response = await axios.get(`${API}/user`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return {
      user: response.data,
    };
  } catch (error) {
    if (error.response.status === 401) {
      return {
        user: "No User",
      };
    }
  }
};

// right - click -> view page source
// const User = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => setTodos(response.data));
//   }, []);

//   return <Layout>{JSON.stringify(todos)}</Layout>;
// };
