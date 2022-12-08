const { format } = require ('date-fns');

const hoje = new Date();
console.log(format(hoje, 'dd/MM/yyyy HH:mm'));