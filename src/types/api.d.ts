type GetMethod = 'get';
type PostMethod = 'post';
type PutMethod = 'put';
type DeleteMethod = 'delete';

type ApiMethods = GetMethod | PostMethod | PutMethod | DeleteMethod;

type ApiPayload = Record<
  string,
  boolean | number | string | I_API_PAYLOAD | Array<boolean | number | string>
>;
