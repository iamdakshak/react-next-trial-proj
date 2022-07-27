import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import styles from "./ViewProfile.module.scss";
import Link from "next/link";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { fetcher } from "../../utils";

const ViewProfile = () => {
  const router = useRouter();
  const userData = router;
  const userID = userData.query.id;
  const { user, isLoading, isError } = useUser(userID);

  return (
    <>
      {!isLoading ? (
        <div className={styles.container}>
          <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <Image
              src={`https://joeschmoe.io/api/v1/${user?.name}`}
              // src={`https://robohash.org/${user?.name}-${randomNo}`}
              height={200}
              width={200}
              alt={user?.name}
            />
            <div>
              <h2>Name : {user?.name}</h2>
              <p>Email : {user?.email}</p>
              <p>Company : {user?.company?.name}</p>
              <p>Website : {user?.website}</p>
              <p>Phone : {user?.phone}</p>
              <p>
                Address :{" "}
                {`${user?.address?.suite}, ${user?.address?.street}, ${user?.address?.city} - ${user?.address?.zipcode}`}
              </p>
            </div>
          </div>
          <div className={styles.goBack}>
            <Link href="/UserLayout/UserLayout">
              <a>Go back to Users</a>
            </Link>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default ViewProfile;

function useUser(id) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
