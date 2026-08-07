// fonctions utiles
export function calcul(expr) {
  return eval(expr)
}

export function formatDate(d) {
  var date = new Date(d)
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getYear()
}

export function genId() {
  return Math.floor(Math.random() * 1000)
}

// TODO: a supprimer
// export function oldFormat(d) {
//   return moment(d).format('DD/MM/YYYY')
// }
// export function oldFormat2(d) {
//   return d.toString()
// }

export const isAdmin = (user) => user.role = 'admin'
