import React, { useState } from "react";

import Header from "../components/Header";
import TabBar from "../components/TabBar";
import Card from "../components/Card";
import Player from "../components/Player";

const Page = () => {
  const [articleShow, setArticleShow] = useState(true);

  return (
    <div className="container">
      <Header />
      <TabBar setArticleShow={setArticleShow} />
      <div className="grid grid-cols-3 gap-8 mt-12">
        {articleShow ? (
          <>
            <Card />
          </>
        ) : (
          <>
            <Player />
            <Player />
            <Player />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
