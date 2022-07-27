import React, { useState, useEffect } from "react";
import CardList from "../../components/CardsList/CardsList";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import { fetcher } from "../../utils";

const UserLayout = ({ userData }) => {
  // return <div>{console.log("API data here -> ", userData)}</div>;

  const [search, setSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState(userData);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    // useSearch(event?.target?.value);
  };

  useEffect(() => {
    if (search !== "") {
      const delayDebounceFn = setTimeout(async () => {
        console.log("Search -> ", search);
        // Send Axios request here
        const searchData = await axios.get(
          `https://jsonplaceholder.typicode.com/users?name=${search}`
        );
        const searchDataUser = searchData?.data;
        console.log("searchDataUser : ", searchDataUser);
        setSearchedUser(searchDataUser);
      }, 1500);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [search]);

  return (
    <div className="tc">
      <h1 className="grow bw2 f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList cardData={searchedUser ?? userData} />
      {/* <div>
        {userData?.map((cardData, index) => (
          <ProfileCard cardData={cardData} key={`cards-${index}`} />
        ))}
      </div> */}

      <div className="goBack">
        <Link href="/"> GO back</Link>
      </div>
    </div>
  );
};

export default UserLayout;

export async function getServerSideProps() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const userData = await res.json();
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const userData = await res.data;

  return {
    props: {
      userData: userData,
    },
  };
}
