import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sku2yXMIVGKwdFGNnriV4IhN27EQbtVjqLD39CFcj1JYH9DisSq7ieSr55Zl1wy4WKnaY2QDyS7buqwS9gGE4BQgpYnwvdGJLkgHiQXKuiIcefeUhH9BKPushZmlkb2Z82caXqtV4MvZHh4AgoNrRpVnPHDPJ9OGDrLhcBROELoEhJpEOXcs",
})
