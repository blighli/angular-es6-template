var $state = null;

export function setState(state) {
  $state = state;
}

export default function state() {
  return $state;
}
