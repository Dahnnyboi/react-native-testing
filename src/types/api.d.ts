type GetMethod = 'get';
type PostMethod = 'post';
type PutMethod = 'put';
type DeleteMethod = 'delete';

type ApiMethods = GetMethod | PostMethod | PutMethod | DeleteMethod;

type ApiPayload = Record<
  string,
  boolean | number | string | ApiPayload | Array<boolean | number | string>
>;
