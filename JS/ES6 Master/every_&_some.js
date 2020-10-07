// Array.every() is simply used to squeeze all items in a list into a single Boolean
// value. It goes through the list and returns true if all the items satisfy a given
// criterion, but returns false on the first items that does not satisfy the
// criterion.

// Array.some() works just like the every(), except that it returns true on seeing the
// first item that satisfies the criterion, but returns false when all the items do
// not satisfy the criterion.

// Example One - Length of names

const names = ["Jill", "Parker", "Quincy", "Ivy"];

const allAreLong = names.every(name => name.length >= 4);
console.log("All are long : ", allAreLong); // False

const someAreLong = names.some(name => name.length >= 4);
console.log("Some are long : ", someAreLong); // True

//Example Two - Validating Input Fields

class Field {
  constructor(value) {
    this.value = value;
  }

  validate() {
    return this.value.length > 0;
  }
}

const username = new Field("laud_accurate");
const email = new Field("me@email.com");
const password = new Field("11221122");
const school = new Field("bleoo");

//instead of doing username.validate() & email.validate() && .......,
//we could use every()
const fields = [username, email, password, school];
const formIsValid = fields.every(field => field.validate());

console.log("Form is valid : ", formIsValid); // True

// and continue
if (formIsValid) {
  // create user account
} else {
  // show some error message
}
