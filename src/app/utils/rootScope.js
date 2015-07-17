var $rootScope = null;

export function setRootScope(rootScope) {
  $rootScope = rootScope;
}

export default function rootScope() {
  return $rootScope;
}
