// 1.0 导入 request 用于发起请求
import request from "@/utils/request.js";

// 2.0.1 request 请求列表数据
const getSearchOld = function(obj) {
  return request.get("goods/search", obj);
};

export const getSearch = obj => request.get("goods/search", obj);

// getSearch({ 参数 }).then();
