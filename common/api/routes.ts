export class ApiRoutes {
  static GET_ALL_POSTS =
    "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts";
  static GET_POST_BY_ID = (id: string) => `${ApiRoutes.GET_ALL_POSTS}/${id}`;
}
