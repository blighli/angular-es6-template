var $http = null;

export function setHttp(http) {
  $http = http;
}

export default function http() {
  return $http;
}
