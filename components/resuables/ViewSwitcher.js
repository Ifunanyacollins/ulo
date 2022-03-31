import React, { useState } from "react";
import Title from "antd/lib/typography/Title";
import { FireOutlined, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
function ViewSwitcher(props) {
  const [view, setView] = useState("top");
  return (
    <div>
      <div className="flex space-x-2 rounded-full border w-fit">
        <Button
          shape="round"
          size="large"
          className="btnwithIcon"
          type={view === "top" && "primary"}
          icon={<FireOutlined />}
          onClick={() => setView("top")}
          style={{ border: "none" }}
        >
          Top
        </Button>
        <Button
          type={view === "new" && "primary"}
          icon={<StarOutlined />}
          shape="round"
          className="btnwithIcon"
          size="large"
          onClick={() => setView("new")}
          style={{ border: "none" }}
        >
          New
        </Button>
      </div>
      <div className="my-5">
        {view === "top" && (
          <>
            <Title level={2}>Top communities</Title>
            <p>Top voted communities on Ulo</p>
          </>
        )}

        {view === "new" && (
          <>
            <Title level={2}>New communities</Title>
            <p>New communities on Ulo</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewSwitcher;
