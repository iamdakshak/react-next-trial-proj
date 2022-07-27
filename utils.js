// export const fetcher = (...args) => fetch(...args).then((res) => res.json());

import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);
