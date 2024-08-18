"use client";
import React from "react";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";

export default function CardContainer() {
  const HOST_PORT = process.env.NEXT_PUBLIC_HOST_PORT;
  const { isPending, error, data } = useQuery({
    queryKey: ["cardData"],
    queryFn: () =>
      fetch(HOST_PORT + "/api/cards")
        .then((res) => res.json())
        .catch((error) => console.error("Error while fetching: ", error)),
  });

  if (error) return "An error has occurred: " + error.message;

  console.log("data ", data);
  return (
    <div className={styles.cardContainer}>
      {isPending ? (
        <div>loading...</div>
      ) : (
        data.cards.map((card: { title: string; description: string }) => (
          <Card title={card.title} description={card.description} />
        ))
      )}
    </div>
  );
}
