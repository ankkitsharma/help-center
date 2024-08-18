"use client";
import React, { useEffect } from "react";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@/utils/contexts/searchContext";

export default function CardContainer() {
  const [filteredUsers, setFilteredUsers] = React.useState<Array<Object>>([]);
  const { title } = useSearch();
  const HOST_PORT = process.env.NEXT_PUBLIC_HOST_PORT;
  const { isPending, error, data } = useQuery({
    queryKey: ["cardData"],
    queryFn: () =>
      fetch(HOST_PORT + "/api/cards")
        .then((res) => res.json())
        .catch((error) => console.error("Error while fetching: ", error)),
  });

  useEffect(() => {
    if (data) {
      if (title) {
        const filteredItems = data.cards.filter(
          (card: { title: string; description: string }) =>
            card.title.toLowerCase().includes(title.toLowerCase())
        );
        setFilteredUsers(filteredItems);
      } else {
        setFilteredUsers(data.cards);
      }
    }
  }, [data, title]);

  console.log("data ", data);
  console.log("filteredItems ", filteredUsers);
  return (
    <div className={styles.cardContainer}>
      {isPending ? (
        <div>loading...</div>
      ) : error ? (
        <div> An error has occurred: {error?.message}</div>
      ) : (
        (filteredUsers as Array<{ title: string; description: string }>).map(
          (card: { title: string; description: string }) => (
            <Card title={card.title} description={card.description} />
          )
        )
      )}
    </div>
  );
}
