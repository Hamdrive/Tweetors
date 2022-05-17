import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { ComponentLoader } from "../../components";

export const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className="flex-column h-100">
      <section className="flex-between">
        <span className="txt-md txt-semibold">Welcome aboard, Hamza 👋</span>
        <button className="btn btn-def btn-sm btn-logout">Log Out</button>
      </section>
      <section className="flex-column flex-grow-1 h-100">
        <div className="my-1 flex-center">
          <span className="txt-md txt-semibold">
            What's happening on Twitter today?
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
                Explore
              </Tab>
              <Tab
                className={`w-50 txt-center h4 txt-semibold py-sm pointer ${
                  tabIndex === 1 && "selectedTab"
                } `}
              >
                Your Tweetors
              </Tab>
            </TabList>

            <TabPanel className={"ov-y-scroll tabPanel"}>
              <TwitterTweetEmbed tweetId={"1525378942554624000"} />
              <TwitterTweetEmbed tweetId={"1525808717324861441"} />
              <TwitterTweetEmbed tweetId={"1524445508407726081"} />
              <TwitterTweetEmbed tweetId={"1525779769983242240"} />
              <ComponentLoader />
            </TabPanel>
            <TabPanel className={"ov-y-scroll tabPanel"}>
              <TwitterTweetEmbed tweetId={"1525388160896643073"} />
              <TwitterTweetEmbed tweetId={"1525429448103067648"} />
              <TwitterTweetEmbed tweetId={"1525561780319027200"} />
              <TwitterTweetEmbed tweetId={"1524807470845071368"} />
              <TwitterTweetEmbed tweetId={"1523723819936284672"} />
              <ComponentLoader />
            </TabPanel>
          </Tabs>
        </section>
      </section>
    </div>
  );
};
