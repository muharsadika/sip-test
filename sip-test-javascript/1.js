let input = 'admin@solusione.id';
let provider = '';

provider = input.split('@')[1].split('.')[0];

console.log('Your email provider is ' + provider);
