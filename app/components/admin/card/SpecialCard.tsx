/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteSpecialMutation,
  useUpdateSpecialMutation,
} from "@/redux/service/own/special/specialApi";
import ApiErrorHandler from "@/utils/ApiErrorHandler";
import getHeroImageUrl from "@/utils/getImageHeroUrl";
import { Button, Card, Descriptions, Form, InputNumber, Modal } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import { FC, useState } from "react";
import { toast } from "sonner";

const SpecialCard: FC<{
  id: string;
  name: string;
  regularPrice: number;
  sellPrice: number;
  hero: string;
  sleeps: number;
  length: number;
  cabins: number;
  make: string;
  uri: string;
}> = ({
  id,
  name,
  regularPrice,
  sellPrice,
  length,
  cabins,
  make,
  sleeps,
  hero,
  uri,
}) => {
  const [deleteSpecial] = useDeleteSpecialMutation();
  const [updatedSpecial, { isLoading }] = useUpdateSpecialMutation();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecial(id).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };

  const handleUpdated = async (values: any) => {
    try {
      const res = await updatedSpecial({
        id,
        special: {
          regularPrice: Number(values.regularPrice), // Convert to number
          sellPrice: Number(values.sellPrice), // Convert to number
          uri,
          name,
          length: Number(length), // Convert to number
          hero,
          make,
          cabins: Number(cabins), // Convert to number
          sleeps: Number(sleeps), // Convert to number
        },
      }).unwrap();
      if (res.success) {
        toast.success(res.message);
        setIsOpen(false);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };
  return (
    <Card
      actions={[
        <div key={"updated"}>
          <Button onClick={() => setIsOpen(true)} key={"updated"}>
            Updated
          </Button>
          <Modal
            loading={isLoading}
            open={isOpen}
            footer={null}
            onCancel={() => setIsOpen(false)}
          >
            <Form
              layout="vertical"
              initialValues={{
                regularPrice: regularPrice,
                sellPrice: sellPrice,
              }}
              onFinish={handleUpdated}
            >
              <Form.Item
                name="regularPrice"
                label="Regular Price"
                rules={[
                  {
                    required: true,
                    message: "Please input regular price!",
                  },
                ]}
              >
                <InputNumber className="!w-full" />
              </Form.Item>
              <Form.Item
                name="sellPrice"
                label="Sell Price"
                rules={[
                  {
                    required: true,
                    message: "Please input sell price!",
                  },
                ]}
              >
                <InputNumber className="!w-full" />
              </Form.Item>
              <Form.Item>
                <Button
                  block
                  loading={isLoading}
                  type="primary"
                  htmlType="submit"
                >
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>,
        <Button
          onClick={() => handleDelete(id || "")}
          danger
          type="primary"
          key={"delete"}
        >
          Delete
        </Button>,
      ]}
      cover={
        <Image
          width={320}
          height={240}
          className="h-[250px]"
          alt={`image of ${name}`}
          src={`https://api.ankor.io${getHeroImageUrl(hero || "", "320w")}`}
        />
      }
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex items-center mt-4 gap-3 flex-wrap">
        <Descriptions>
          <Descriptions.Item label="Regular Price">
            ${regularPrice}
          </Descriptions.Item>
          <Descriptions.Item label="Sell Price">${sellPrice}</Descriptions.Item>
          <Descriptions.Item label="Cabins">{cabins}</Descriptions.Item>
          <Descriptions.Item label="Length">{length}</Descriptions.Item>
          <Descriptions.Item label="Sleeps">{sleeps}</Descriptions.Item>
        </Descriptions>
        <Paragraph>
          Make: <b>{make}</b>
        </Paragraph>
      </div>
    </Card>
  );
};

export default SpecialCard;
