export class ActionBase {
  handleError(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }

  toJson(response) {
    return response.json();
  }
}
