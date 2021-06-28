import React from "react";
import { useParams } from "react-router-dom"; //useParams

export default function ProductDetail() {
  let { id } = useParams();

  return <div>Ürün : {id}</div>;
}
