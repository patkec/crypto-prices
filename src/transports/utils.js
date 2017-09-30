export function handleError(response) {
  if (!response.ok && response.status !== 404) {
    throw new Error(response.statusText);
  }
  return response;
}
