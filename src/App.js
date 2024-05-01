import { useEffect } from "react";
import logo from "./logo.svg";
//import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { GitActions } from "./redux/slice";
import Form from "./Components/form";
import Displaydata from "./Components/DisplayData";

function App() {
  const name = useSelector((state) => {
    return state.finder.Name;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const set = setTimeout(() => {
      if (name.trim().length == 0) {
        dispatch(GitActions.addFetchStage(false));
        dispatch(GitActions.addFetchRepStage(false));
      }
      const Fetch = async () => {
        const response = await fetch(`https://api.github.com/users/${name}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            // You can include an access token here for authenticated requests
          },
        });
        if (!response.ok) {
          throw new Error("NOT FOUND");
        }
        const data = await response.json();
        dispatch(GitActions.addFetchData(data));
        dispatch(GitActions.addFetchStage(true));

        const { repos_url } = data;
        const res = await fetch(repos_url);
        if (!res.ok) {
          dispatch(GitActions.addFetchRepStage(false));
          throw new Error("NOT FOUND");
        }
        const d = await res.json();
        dispatch(GitActions.AddFetchRep(d));
        dispatch(GitActions.addFetchRepStage(true));

        console.log("me", d);
      };

      if (name.trim().length > 0) {
        Fetch().catch((er) => {
          console.log("Hell", er.message);
        });
      }
    }, 1000);
    return () => {
      clearTimeout(set);
    };
  }, [name]);

  return (
    <div>
      <Form></Form>
      <h1 className="text-center pt-5 mb-5">User Detail</h1>
      <Displaydata></Displaydata>
    </div>
  );
}

export default App;
