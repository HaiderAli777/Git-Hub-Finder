import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GitActions } from "../redux/slice";

const Displaydata = () => {
  const con = useSelector((state) => {
    return state.finder.fetchStage;
  });
  const data = useSelector((state) => {
    return state.finder.fetchData;
  });
  const fetchrep = useSelector((state) => {
    return state.finder.fetchRep;
  });
  const fetchrepstage = useSelector((state) => {
    return state.finder.fetchRepStage;
  });
  const Name = useSelector((state) => {
    return state.finder.Name;
  });
  if (con) {
    var {
      avatar_url,
      html_url,
      name,
      followers,
      location,
      public_repos,
      type,
      following,
      repos_url,
    } = data;
    let som = 0;
    if (fetchrep) {
      const repi = fetchrep.filter((obj) => {
        let { description } = obj;
        if (description && som <= 1) {
          som = som + 1;
          return true;
        } else {
          return false;
        }
      });

      var content = repi.map((obj) => {
        return (
          <div key={Math.random()}>
            <div>{obj.description}</div>
            <div>
              <a href={obj.html_url} target="_blank">
                <button type="button" class="btn btn-dark my-3">
                  Open Repository
                </button>
              </a>
            </div>
          </div>
        );
      });
    }
  }

  return (
    <div className="w-75 mx-auto border border-dark border-5 ">
      {con ? (
        <div className="row m-2">
          <div className="col-12 col-lg-3 d-flex flex-column  justify-content-center">
            <div className="text-center">
              <img
                src={avatar_url}
                alt="USER_PICTURE"
                className="rounded-circle img-fluid w-50 text-center"
              ></img>
            </div>
            <div className="text-center">
              <a href={html_url} target="_blank">
                <button type="button" class="btn btn-dark my-3">
                  Open Profile
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex flex-column  justify-content-center">
            <h4>
              Name : <span className="fw-bold">{name || Name}</span>
            </h4>
            <h4>
              FOLLOWERS : <span className="fw-bold">{followers}</span>
            </h4>
            <h4>
              FOLLOWING: <span className="fw-bold">{following}</span>
            </h4>
            <h4>
              LOCATION : <span className="fw-bold">{location}</span>
            </h4>
            <h4>
              REPOSITORY: <span className="fw-bold">{public_repos}</span>
            </h4>
            <h4>
              TYPE: <span className="fw-bold">{type}</span>
            </h4>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column  justify-content-center">
            {public_repos ? (
              <div>
                <div className="pt-2">
                  <h3 className="fw-bold">Repository</h3>
                </div>
                <div className="pt-2"> {content}</div>
                <div className="pt-2">
                  <h5 className="">
                    If You Wanna See More Repo Click On Profile....
                  </h5>
                </div>
              </div>
            ) : (
              <div>
                <h3>NO REPOSITORY FOUND</h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="py-4 my-4">
          <h3 className="py-4 text-center">NO USER FOUND</h3>
        </div>
      )}
    </div>
  );
};
export default Displaydata;
