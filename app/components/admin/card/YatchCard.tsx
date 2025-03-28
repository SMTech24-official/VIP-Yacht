/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreteSpecialMutation } from "@/redux/service/own/special/specialApi";
import { TYatch } from "@/types/yatch";
import getHeroImageUrl from "@/utils/getImageHeroUrl";
import { Button, Card, Form, InputNumber, Modal } from "antd";
import Image from "next/image";
import React, { FC, useState } from "react";

const YatchCard: FC<TYatch> = ({
  name,
  uri,
  builtYear,
  lastModified,
  cabins,
  length,
  make,
  hero,
  sleeps,
}) => {
  const [open, setIsOpen] = useState(false);
  const [createSpecial, { isLoading }] = useCreteSpecialMutation();

  const onFinish = async (values: any) => {
    try {
      const res = await createSpecial({
        regularPrice: parseInt(values.regularPrice),
        sellPrice: parseInt(values.sellPrice),
        uri,
        name,
        length,
        hero,
        make,
        cabins,
        sleeps,
      }).unwrap();

      console.log(res);
    } catch (error) {
      console.error("Error creating special:", error);
    }
  };
  return (
    <Card
      cover={
        <Image
          width={320}
          height={240}
          className="h-[250px]"
          alt={`image of ${name}`}
          src={`https://api.ankor.io${getHeroImageUrl(hero, "320w")}`}
        />
      }
    >
      <div className="pb-4">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>Built: {builtYear}</p>
      </div>
      <div className="py-3 border-t flex items-center gap-6 flex-wrap">
        <p>Last Modified: {new Date(lastModified).toLocaleString()}</p>
        <p>Cabins: {cabins}</p>
        <p>Length: {length} miles</p>
        <p>Make: {make}</p>
        <p>Sleeps: {sleeps} people</p>
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>Make It Special</Button>
        <Modal footer={null} open={open} onCancel={() => setIsOpen(false)}>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item name={"regularPrice"} label="Regular Price">
              <InputNumber className="!w-full" />
            </Form.Item>
            <Form.Item name={"sellPrice"} label="Sell Price">
              <InputNumber className="!w-full" />
            </Form.Item>
            <Form.Item>
              <Button
                loading={isLoading}
                htmlType="submit"
                block
                type="primary"
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Card>
  );
};

export default YatchCard;
