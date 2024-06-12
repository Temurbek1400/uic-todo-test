"use client";
import { projectType } from "@/types/schema";
import useAddQueryParam from "@/utils/hooks/useAddQueryParam";
import React, { useEffect } from "react";

const PushRoute = ({ project }: { project: projectType }) => {
  const addQueryParam = useAddQueryParam();
  useEffect(() => {
    addQueryParam("project", project?.id);
  }, []);

  return null;
};

export default PushRoute;
