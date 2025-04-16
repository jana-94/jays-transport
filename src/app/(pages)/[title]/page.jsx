"use client";

import React from "react";
import { use } from "react";
import MotoTaxi from "@/app/pages/MotoTaxi/page";
import { componentdetails } from "@/app/data/componentdetails";
import Metadata from "@/app/components/metaData/metaData";
import { metadata } from "@/app/components/metaData/data";
import Vtc from "@/app/pages/vtc/page";
import Van from "@/app/pages/van/page";

function Services({ params }) {
  const data = use(params);

  function findDataByTitle(title) {
    return componentdetails.find((data) => data.slug === title);
  }

  const componentArray = [
    { id: 1, Component: <MotoTaxi />, path: "mototaxi" },
    { id: 2, Component: <Vtc />, path: "vtc" },
    { id: 3, Component: <Van />, path: "van" },
  ];

  const foundData = findDataByTitle(data.title);
  console.log(foundData);

  const matchedComponent = componentArray.find(
    (item) => item.path === foundData?.slug
  );
  const matchedMetaData = metadata.find(
    (item) => item.slug === foundData?.slug
  );

  return (
    <div>
      <Metadata
        title={matchedMetaData.title}
        description={matchedMetaData.description}
      />
      {matchedComponent.Component}
    </div>
  );
}

export default Services;
