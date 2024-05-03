import dashboards from "@application/dashboard";
import { useEffect, useState } from "react";
import { getPreview } from "./server";

export function useFields(slug, data) {
  for (let dashboard of dashboards) {
    if (dashboard.title == slug) {
      return dashboard.fields({}, data);
    }
  }
  return [];
}

export function usePreview(slug) {
  for (let board of dashboards) {
    if (board.title == slug) {
      return board.preview;
    }
  }
  return null;
}
