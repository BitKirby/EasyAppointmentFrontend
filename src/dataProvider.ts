import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

//TODO
const apiUrl = "http://127.0.0.1:5000/api";
const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {
  getList: (resource, params) => {
    // 处理 filter 参数
    const query =
      params.filter && Object.keys(params.filter).length > 0
        ? JSON.stringify(params.filter)
        : null;

    // 添加 order, page, perPage, sort 参数
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: "id", order: "ASC" }; // 提供默认值

    console.log(params);

    const queryParams = {
      filter: query,
      order: order,
      page: page,
      per_page: perPage, //和后端统一
      sort: field,
    };
    console.log(queryParams);

    // 根据参数生成 URL
    const url = `${apiUrl}/${resource}/search?${stringify(queryParams)}`;

    return httpClient(url).then(({ json }) => {
      const dataKey = resource; // 假设字段名与资源名一致
      return {
        data: json[dataKey], // 动态访问 API 返回的字段
        total: json.total_pages * json.per_page, // 计算总条目数
      };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?/search${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  //TODO
  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}` + "campuses/search" + `?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        (headers.get("content-range") || "0").split("/").pop() || "0",
        10,
      ),
    }));
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id } as any,
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};
