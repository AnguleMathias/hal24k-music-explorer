import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import {
  getAllNewReleases,
  reset,
} from "../../../features/releases/releaseSlice";

const Discover = () => {
  // const [newReleases] = useState([]);
  const [playlists] = useState([]);
  const [categories] = useState([]);

  const dispatch = useDispatch();

  const { newReleases } = useSelector((state: any) => state.newReleases);
  console.log("newReleases", newReleases);

  useEffect(() => {
    dispatch(getAllNewReleases());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} />
    </div>
  );
};

export default Discover;
