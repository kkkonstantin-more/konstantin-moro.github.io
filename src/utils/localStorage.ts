export function isRegistered() {
  return localStorage.getItem('token') === 'registered';
}
