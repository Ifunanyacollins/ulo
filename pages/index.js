import { useState, useEffect } from "react";
import { Divider, message, notification, Skeleton } from "antd";
import Title from "antd/lib/typography/Title";
import Container from "../components/layout/Container";
import ListBox from "../components/resuables/ListBox";
import ListControl from "../components/resuables/ListControl";
import Search from "../components/resuables/Search";
import TopTagsBox from "../components/resuables/TopTagsBox";
import ViewSwitcher from "../components/resuables/ViewSwitcher";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

function Home() {
  const [communities, setCommunities] = useState([]);

  useEffect(async () => {
    try {
      const allCollection = [];
      const querySnapshot = await getDocs(collection(db, "communities"));
      querySnapshot.forEach((doc) => {
        allCollection.push({ ...doc.data(), id: doc.id });
      });
      setCommunities(allCollection);
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
        placement: "bottomLeft",
      });
    }
  }, []);

  return (
    <>
      <main>
        <Container>
          <Title level={1}>
            Explore millions of online communities near you
          </Title>
          <Search />
          <TopTagsBox />
          <Divider />
          <section>
            <ViewSwitcher />
          </section>
          <section className="flex justify-between space-x-10 py-5">
            <div className="lg:w-2/3 w-full">
              <ListControl>
                {communities.map((community) => (
                  <ListBox community={community} />
                ))}
                {!communities.length && <Skeleton />}
              </ListControl>
            </div>
            <div className="bg-gray-100  self-start justify-center items-center w-1/3 hidden lg:flex">
              <p>Ads</p>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}

export default Home;
