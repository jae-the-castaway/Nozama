import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skXtA6vkFNPavltNZvEx9xmHLshSpj54td5ZwYOVTCIS5YNyV5bhA5jdtzPdnuBxyb4FeUrZNoYqxwuiaxTe2JzvwQTh9EO5hMri14GDNy0UbxvO9n9uzZexqS3SRhVgWQhgzTfmQt5bPZvu5LXRfU8GFhAWjqJRSLiv1uZvODXGsfcZa2DN",
})
