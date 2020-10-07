// Array.filter() is used to select the needed data from a list using s given
// criterion. The criterion can be any truthy expression.

// Array.find() is used to query/search for a particular item. It works just like
// the filter(), except that the find() returns just the first item the satisfies
// the criterion

// Example One - Filter Products

const products = [
  { name: "Carrots", type: "Vegetable", quantity: 6, price: 11 },
  { name: "Cucumber", type: "Vegetable", quantity: 2, price: 5 },
  { name: "Simply Good", type: "Biscuit", quantity: 10, price: 12 },
  { name: "Apple", type: "Fruit", quantity: 5, price: 20 },
  { name: "Celery", type: "Vegetable", quantity: 3, price: 10 }
];

// Type = 'Vegetable, quantity > 0, price <= 10
const desiredProducts = products.filter(product => {
  return (
    product.type === "Vegetable" && product.quantity > 0 && product.price <= 10
  );
});

console.log(desiredProducts);

// Example Two - Find Post For a Comment

const posts = [
  { id: 1, title: "Awesome Post" },
  { id: 2, title: "Controversial Post" }
];

const comment = { postId: 1, content: "That is an awesome post" };

function postForComment(posts, comment) {
  return posts.find(post => post.id === comment.postId);
}

console.log("Query: ", postForComment(posts, comment));
