
const products = [
  {id: 1, name: 'Tiranosaurio', category:"carnivoro", price: 5000000, stock: 7, description: 'Tyrannosaurus rex', imageUrl: 'https://i.imgur.com/rOz7ZZs.jpg'},
  {id: 2, name: 'Anquilosaurio ', category:"herbivoro", price: 1000000, stock: 17, description: 'Ankylosaurus', imageUrl: 'https://i.imgur.com/DDsevtP.jpg'}
  

]

export const mFetch = (pid) => new Promise ((res, rej) => {
  setTimeout(() => {
    res(pid ? products.find(product => product.id === pid) : products) 
  }, 2000);

})