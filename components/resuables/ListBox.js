import { Button, Tag } from "antd";
import { ArrowUpOutlined, CaretUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

function ListBox({ community }) {
  const {
    c_description,
    c_logo = "https://firebasestorage.googleapis.com/v0/b/ulom-43d1b.appspot.com/o/27002.jpg?alt=media&token=d3244e70-3b96-416f-a81a-d1b3640ca53a",
    c_name,
    c_number_of_active_member,
    round,
    c_access = "/",
    isPromoted,
    noAction,
  } = community;
  return (
    <div className="flex flex-col lg:flex-row w-full lg:p-5 p-3  listbox border  lg:space-x-5">
      <div className=" flex-shrink-0 flex space-x-3">
        <div
          className={`relative border overflow-hidden lg:h-24 lg:w-24 h-12 w-12 ${
            round ? "rounded-full" : "rounded-lg"
          }`}
        >
          <Image
            src={c_logo}
            layout="responsive"
            width={"100%"}
            height={"100%"}
            objectFit="fill"
          />
        </div>

        <div className="lg:hidden block">
          <p className="font-bold lg:text-lg text-sm">{c_name}</p>
          <div className="flex space-x-3">
            {isPromoted && (
              <Tag
                style={{
                  padding: 2,
                  fontSize: 15,
                  paddingLeft: 5,
                  paddingRight: 5,
                  borderRadius: 5,
                }}
                color="blue"
              >
                # Promoted
              </Tag>
            )}
            <span className="flex items-center space-x-1">
              <span className="text-primary">Active members</span>
              <strong>{c_number_of_active_member}</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between order-2 lg:order-1 lg:mt-0 mt-3">
          <div className="hidden lg:block ">
            <p className="font-bold text-lg">{c_name}</p>
            <div className="flex space-x-3">
              {isPromoted && (
                <Tag
                  style={{
                    padding: 2,
                    fontSize: 15,
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 5,
                  }}
                  color="blue"
                >
                  # Promoted
                </Tag>
              )}
              <span className="flex items-center space-x-1">
                <span className="text-primary">Active members</span>
                <strong>{c_number_of_active_member}</strong>
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            {noAction && (
              <Button
                size="large"
                style={{ borderRadius: 5 }}
                className="rounded-lg btnwithIcon"
              >
                Learn more
                <ArrowUpOutlined className="transform rotate-45" />
              </Button>
            )}

            {!noAction && (
              <Button
                href={c_access}
                target="_blank"
                size="large"
                style={{ borderRadius: 5 }}
                className="rounded-lg"
              >
                Join
              </Button>
            )}

            {!noAction && (
              <Button
                size="large"
                style={{ borderRadius: 5 }}
                className="rounded-lg btnwithIcon"
                icon={<CaretUpOutlined />}
              >
                Vote (22k)
              </Button>
            )}
          </div>
        </div>
        <div className="pt-1 order-1 lg:order-2">
          <p>{c_description}</p>
        </div>
      </div>
    </div>
  );
}

export default ListBox;
