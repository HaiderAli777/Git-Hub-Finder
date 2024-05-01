import { useDispatch, useSelector } from "react-redux";
import { GitActions } from "../redux/slice";
const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.finder.Name;
  });
  const NameHandler = (event) => {
    const n = event.target.value;
    dispatch(GitActions.setName(n));
  };
  return (
    <div className="mx-auto  w-75 mt-5">
      <h1 className="text-center pb-4">ENTER GITHUB USERNAME</h1>

      <input
        type="text"
        className="form-control border border-5 border-dark "
        id="inputPassword"
        onChange={NameHandler}
        value={name}
      />
    </div>
  );
};
export default Form;
