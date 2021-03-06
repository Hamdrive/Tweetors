import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TweetCard } from "../../components";
import { ComponentLoader, EmptyResult, Search } from "../../components";
import { useAuth, useData } from "../../context";
import { Tweetor } from "../tweetor/Tweetor";

export const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const {
    dataState: { tweetors, tweets },
    getExistingTweetors,
    deleteTweetor,
    setNewTweetor,
    loading,
    searchError,
  } = useData();

  const {
    user: { displayName },
    logoutUser,
  } = useAuth();

  const handleDelete = (username) => {
    deleteTweetor(username);
  };

  const handleSearchTweetor = (username) => {
    setNewTweetor(username);
  };

  useEffect(() => {
    getExistingTweetors();
  }, []);

  return (
    <div className="flex-column h-100 ov-hidden dashboard">
      <section className="flex-between">
        <span className="txt-md txt-semibold w-80">
          Hello, {displayName} 👋
        </span>
        <button onClick={logoutUser} className="btn btn-def btn-sm btn-logout">
          Log Out
        </button>
      </section>
      <section className="flex-column flex-grow-1 h-100">
        <div className="my-1 flex-center">
          <span className="txt-md txt-semibold">
            What&apos;s happening on Twitter today?
          </span>
        </div>
        <section className="flex-grow-1 h-100 tabs">
          <Tabs selectedIndex={tabIndex} onSelect={(i) => setTabIndex(i)}>
            <TabList className={"flex-row tablist"}>
              <Tab
                className={`w-50 txt-center h4 txt-semibold py-sm pointer ${
                  tabIndex === 0 && "selectedTab"
                } `}
              >
                Your Tweetors
              </Tab>
              <Tab
                className={`w-50 txt-center h4 txt-semibold py-sm pointer ${
                  tabIndex === 1 && "selectedTab"
                } `}
              >
                Tweets
              </Tab>
            </TabList>

            <TabPanel>
              <Search
                handleSearchTweetor={handleSearchTweetor}
                searchError={searchError}
              />
              <div className="ov-y-auto tweetortabPanel">
                {!loading ? (
                  tweetors?.length ? (
                    tweetors?.map((tweetor) => (
                      <Tweetor
                        key={tweetor.id}
                        tweetor={tweetor}
                        handleDelete={handleDelete}
                      />
                    ))
                  ) : (
                    <EmptyResult text={"No Tweetors Found."} />
                  )
                ) : (
                  [1, 2, 3, 4].map((num) => (
                    <ComponentLoader
                      key={num}
                      width={"100%"}
                      height={72}
                      speed={1}
                    />
                  ))
                )}
              </div>
            </TabPanel>
            <TabPanel className={"ov-y-auto exploretabPanel"}>
              {!loading ? (
                tweetors?.length ? (
                  tweets?.map((tweet) => (
                    <TweetCard
                      key={tweet?.id}
                      tweet={tweet}
                    />
                  ))
                ) : (
                  <EmptyResult text={"No Recent Tweets Found."} />
                )
              ) : (
                [1, 2, 3, 4].map((num) => (
                  <ComponentLoader
                    key={num}
                    width={"100%"}
                    height={72}
                    speed={1}
                  />
                ))
              )}
            </TabPanel>
          </Tabs>
        </section>
      </section>
    </div>
  );
};
