"use client";
import { useDeleteDestinationMutation } from "@/redux/service/own/destination/destinationApi";
import { TDestinationType } from "@/types/destinationType";
import ApiErrorHandler from "@/utils/ApiErrorHandler";
import { Button, Card } from "antd";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { toast } from "sonner";

const DestinationCard: FC<TDestinationType> = ({
  id,
  banner,
  description,
  title,
}) => {
  const [deleteDestination, { isLoading }] = useDeleteDestinationMutation();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/admin/destination/${id}`);
  };
  const handleDelete = async () => {
    try {
      const res = await deleteDestination(id || "").unwrap();
      if (res.success) {
        toast.success(res.message);
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
        <Button onClick={handleClick} key={"updated"}>
          Updated
        </Button>,
        <Button
          onClick={handleDelete}
          loading={isLoading}
          key={"delete"}
          type="primary"
          danger
        >
          Delete
        </Button>,
        <Button key={"view"}>View</Button>,
      ]}
      cover={
        <Image
          className="h-[250px]"
          width={400}
          height={250}
          alt={`image of ${title}`}
          src={banner || ""}
        />
      }
    >
      <Title level={3}>{title}</Title>
      <p>{description?.slice(0, 20)}...</p>
    </Card>
  );
};

export default DestinationCard;
