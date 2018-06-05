window.ltk_environment = {
  sso_url: 'https://10.0.11.179:8443',
  environment_name: 'localdev',
  root_domain: 'dockerhost',
  auth_token_name: 'quality_manager_app_auth_token',
  app_id: 'c4a154e5-a3ad-44f0-baac-23e356dc5234',
  redirect_url: 'http://dockerhost:8080/quality',
  external_services: {
    quality_manager_app_url: 'http://dockerhost:8080/quality',
    dashboard_app_url: 'https://10.0.11.179:11036',
    lqa_service_url: 'http://dockerhost:11058/lqa-service'
  }
};

import Api from "../../api.js";
export default class UserInfoService {
  static getUserDetails() {
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2)
        return parts
          .pop()
          .split(";")
          .shift();
    }
    let token = getCookie(ltk_environment.auth_token_name);
    return Api.fetch({
      url: `${ltk_environment.sso_url}/api/access_tokens/${token}/details`,
      headers: {
        Authorization: `bearer ${token}`
      }
    }).catch(error => {
      throw error;
    });
  }
}
