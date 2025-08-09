import axios from "axios";

const BASE_URL =
  "https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: "application/json" },
});

async function apiGet(path = "", params = {}) {
  try {
    const response = await apiClient.get(path, { params });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export async function fetchSuperheroes({
  page = 1,
  perPage = 5,
  query,
  sort,
} = {}) {
  const params = { page, perPage };
  if (query) params.filter = `name ~ '${query}'`;
  if (sort) params.sort = sort;
  return apiGet("", params);
}

export async function fetchSuperheroById(id) {
  return apiGet(`/${encodeURIComponent(id)}`);
}

function handleAxiosError(error) {
  if (error.response) {
    const status = error.response.status;
    const message =
      error.response.data?.message ||
      error.response.statusText ||
      "Unknown error";
    throw new Error(`API error ${status}: ${message}`);
  } else if (error.request) {
    throw new Error("No response received from API");
  } else {
    throw new Error(error.message);
  }
}
